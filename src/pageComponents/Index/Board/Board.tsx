import React, { FC, useState } from 'react';
import { ICard, IColumn, IComment, IUser } from '../../../types/interfaces';
import { Column, CommentsList } from '../../../components';
import { StyledBoard, BoardContainer, CardInfo, CardInfoColumn, CardInfoTitle, CardInfoDescription, CardForm, CardFormButton } from './styles';
import { Input, Modal, Textarea } from '../../../ui';

interface BoardProps {
  user: IUser;
}

const Board: FC<BoardProps> = (props) => {
  // arrays
  const defaultColumnsArr: IColumn[] = [
    { id: 1, column: 'To Do' },
    { id: 2, column: 'In progress' },
    { id: 3, column: 'Testing' },
    { id: 4, column: 'Done' },
  ];

  const [columns, setColumns] = useState<IColumn[]>(JSON.parse(localStorage.getItem('columns')!) || defaultColumnsArr);
  const [cards, setCards] = useState<ICard[]>(JSON.parse(localStorage.getItem('cards')!) || []);
  const [comments, setComments] = useState<IComment[]>(JSON.parse(localStorage.getItem('comments')!) || []);

  // modals
  const [modalInfoCard, toggleModalInfoCard] = useState(false);
  const [modalAddCard, toggleModalAddCard] = useState(false);
  const [modalEditCard, toggleModalEditCard] = useState(false);

  // values
  const [currentCardId, setCurrentCardId] = useState(0);
  const [currentColumnId, setCurrentColumnId] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const clearFormFields = () => {
    setInputValue('');
    setTextareaValue('');
  };

  // columns
  const onEditColumn = (values: IColumn) => {
    const columnDuplicate = [...columns];
    const findColumnItem = columnDuplicate.find((column: IColumn) => column.id === values.id);

    if (findColumnItem) {
      findColumnItem.column = values.column;

      setColumns(columnDuplicate);
      localStorage.setItem('columns', JSON.stringify(columnDuplicate));
    }
  };

  // cards
  const AddCard: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputValue) {
      const card: ICard = {
        id: Date.now(),
        columnId: currentColumnId,
        title: inputValue,
        description: textareaValue
      }

      const newCards = [...cards, card];

      setCards(newCards);
      localStorage.setItem('cards', JSON.stringify(newCards));

      toggleModalAddCard(!modalAddCard);
      clearFormFields();
    }
  };

  const EditCard: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const cardsDuplicate = [...cards];
    const findCard = cardsDuplicate.find((card: ICard) => card.id === currentCardId);

    if (findCard) {
      if (inputValue) findCard.title = inputValue;
      if (textareaValue) findCard.description = textareaValue;

      setCards(cardsDuplicate);
      localStorage.setItem('cards', JSON.stringify(cardsDuplicate));

      toggleModalEditCard(!modalEditCard);
      clearFormFields();
    }
  };

  const onDeleteCard = (id: number) => {
    const newCards = cards.filter((card: ICard) => card.id !== id);
    const newComments = comments.filter((comment: IComment) => comment.cardId !== id);

    if (newCards && newComments) {
      setCards(newCards);
      setComments(newComments);

      localStorage.setItem('cards', JSON.stringify(newCards));
      localStorage.setItem('comments', JSON.stringify(newComments));
    }
  };

  // comments
  const onAddComment = (id: number, comment: string) => {
    const newComment = {
      id: Date.now(),
      cardId: id,
      userId: props.user.id,
      comment: comment
    };

    setComments([...comments, newComment]);
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
  };

  const onEditComment = (id: number, comment: string) => {
    const commentsDuplicate = [...comments];
    const findComment = commentsDuplicate.find((comment: IComment) => comment.id === id);

    if (findComment) {
      findComment.comment = comment;

      setComments(commentsDuplicate);
      localStorage.setItem('comments', JSON.stringify(commentsDuplicate));
    }
  };

  const onDeleteComment = (id: number) => {
    const newComments = comments.filter((comment: IComment) => comment.id !== id);

    if (newComments) {
      setComments(newComments);
      localStorage.setItem('comments', JSON.stringify(newComments));
    }
  };

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            columns.map((column: IColumn) =>
              <Column
                key={column.id}
                column={column}
                onEditColumn={onEditColumn}
                comments={comments}
                cards={cards.filter((card: ICard) => card.columnId === column.id)}
                onCardClick={(id: number) => {
                  setCurrentCardId(id);
                  toggleModalInfoCard(!modalInfoCard);
                }}
                onAddCard={() => {
                  setCurrentColumnId(column.id);
                  toggleModalAddCard(!modalAddCard);
                }}
                onEditCard={(id: number) => {
                  setInputValue(cards.find((card: ICard) => card.id === id)?.title || '');
                  setTextareaValue(cards.find((card: ICard) => card.id === id)?.description || '');
                  toggleModalEditCard(!modalEditCard);
                }}
                onDeleteCard={(id: number) => onDeleteCard(id)}
              />
            )
          }
        </BoardContainer>
      </StyledBoard>

      <Modal
        title="Card info"
        modalVisibility={modalInfoCard}
        onCloseClick={() => toggleModalInfoCard(!modalInfoCard)}
      >
        {
          cards
            .filter((item: ICard) => item.id === currentCardId)
            .map((card: ICard) =>
              <div key={card.id}>
                <CardInfo>
                  <CardInfoColumn>{columns.find((column: IColumn) => column.id === card.columnId)?.column}</CardInfoColumn>
                  <CardInfoTitle>{card.title}</CardInfoTitle>
                  <CardInfoDescription>{card.description}</CardInfoDescription>
                </CardInfo>
                <CommentsList
                  comments={comments.filter((comment: IComment) => comment.cardId === card.id)}
                  user={props.user}
                  cardId={card.id}
                  onAddComment={onAddComment}
                  onEditComment={onEditComment}
                  onDeleteComment={onDeleteComment}
                />
              </div>
            )
          }
      </Modal>

      <Modal
        title="Add card"
        modalVisibility={modalAddCard}
        onCloseClick={() => {
          toggleModalAddCard(!modalAddCard);
          clearFormFields();
        }}
      >
        <CardForm onSubmit={AddCard}>
          <Input
            title="Title"
            type="text"
            name="cardTitle"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            required
          />
          <Textarea
            title="Description"
            name="cardDescription"
            value={textareaValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
          />
          <CardFormButton type="submit">Add</CardFormButton>
        </CardForm>
      </Modal>

      <Modal
        title="Edit card"
        modalVisibility={modalEditCard}
        onCloseClick={() => {
          toggleModalEditCard(!modalEditCard)
          clearFormFields();
        }}
      >
        <CardForm onSubmit={EditCard}>
          <Input
            title="Title"
            type="text"
            name="cardTitle"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
          <Textarea
            title="Description"
            name="cardDescription"
            value={textareaValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
          />
          <CardFormButton type="submit">Edit</CardFormButton>
        </CardForm>
      </Modal>
    </>
  )
}

export default Board;
