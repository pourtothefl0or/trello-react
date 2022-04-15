import React, { FC, useState } from 'react';
import { cardInterface, columnInterface, commentInterface, userInterface } from '../../../types/interfaces';
import { Column, CommentsList } from '../../../components';
import { StyledBoard, BoardContainer, CardInfo, CardInfoColumn, CardInfoTitle, CardInfoDescription, CardForm, CardFormButton } from './styles';
import { Input, Modal, Textarea } from '../../../ui';

interface BoardProps {
  user: userInterface;
};

const Board: FC<BoardProps> = (props) => {
  // arrays
  const defaultColumnsArr = [
    { id: 1, column: 'To Do' },
    { id: 2, column: 'In progress' },
    { id: 3, column: 'Testing' },
    { id: 4, column: 'Done' },
  ];

  const [columns, setColumns] = useState(JSON.parse(localStorage.getItem('columns')!) || defaultColumnsArr);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')!) || []);
  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')!) || [])

  // modals
  const [modalAddCard, toggleModalAddCard] = useState(false);
  const [modalEditCard, toggleModalEditCard] = useState(false);
  const [modalInfoCard, toggleModalInfoCard] = useState(false);

  // values
  const [currentCardId, getCurrentCardId] = useState(0);
  const [currentColumnId, getCurrentColumnId] = useState(0);
  const [inputValue, handleInputValue] = useState('');
  const [textareaValue, handleTextareaValue] = useState('');

  const clearFields = () => {
    handleInputValue('');
    handleTextareaValue('');
  };

  // columns
  const onEditColumn = (values: columnInterface) => {
    const columsnDuplicate = [...columns];
    const findColumn = columsnDuplicate.find((column: columnInterface) => column.id === values.id);
    findColumn.column = values.column;

    setColumns(columsnDuplicate);
    localStorage.setItem('columns', JSON.stringify(columsnDuplicate));
  };

  // cards
  const onAddCard = (event: any) => {
    event.preventDefault();

    const newCard = {
      id: Date.now(),
      columnId: currentColumnId,
      title: inputValue,
      description: textareaValue
    };

    setCards([...cards, newCard]);
    localStorage.setItem('cards', JSON.stringify([...cards, newCard]));

    toggleModalAddCard(!modalAddCard);
    event.target.reset();

  };

  const onEditCard = (event: any) => {
    event.preventDefault();

    const cardsDuplicate = [...cards];
    const findCard = cardsDuplicate.find((card: cardInterface) => card.id === currentCardId);

    if (inputValue !== '') {
      findCard.title = inputValue;
    }

    if (textareaValue !== '') {
      findCard.description = textareaValue;
    }

    setCards(cardsDuplicate);
    localStorage.setItem('cards', JSON.stringify(cardsDuplicate));

    toggleModalEditCard(!modalEditCard);
    event.target.reset();
  };

  const onDeleteCard = (id: number) => {
    const newCards = cards.filter((card: cardInterface) => card.id !== id);
    const newComments = comments.filter((comment: commentInterface) => comment.cardId !== id);

    setCards(newCards);
    setComments(newComments);

    localStorage.setItem('cards', JSON.stringify(newCards));
    localStorage.setItem('comments', JSON.stringify(newComments));
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
    const findComment = commentsDuplicate.find((comment: commentInterface) => comment.id === id);

    findComment.comment = comment;

    setComments(commentsDuplicate);
    localStorage.setItem('comments', JSON.stringify(commentsDuplicate));
  };

  const onDeleteComment = (id: number) => {
    const newArr = comments.filter((comment: commentInterface) => comment.id !== id);

    setComments(newArr);
    localStorage.setItem('comments', JSON.stringify(newArr));
  };

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            columns.map((column: columnInterface) =>
              <Column
                key={column.id}
                column={column}
                onEditColumn={onEditColumn}
                comments={comments}
                cards={cards.filter((card: cardInterface) => card.columnId === column.id)}
                onAddCard={() => {
                  getCurrentColumnId(column.id);
                  toggleModalAddCard(!modalAddCard);
                }}
                onEditCard={(id: number) => {
                  getCurrentCardId(id);
                  getCurrentColumnId(column.id);
                  toggleModalEditCard(!modalEditCard);
                }}
                onDeleteCard={(id: number) => onDeleteCard(id)}
                onCardClick={(id: number) => {
                  getCurrentCardId(id);
                  toggleModalInfoCard(!modalInfoCard);
                }}
              />
            )
          }
        </BoardContainer>
      </StyledBoard>

      <Modal
        title="Add card"
        modalVisibility={modalAddCard}
        onCloseClick={() => {
          toggleModalAddCard(!modalAddCard);
          clearFields();
        }}
      >
        <CardForm onSubmit={onAddCard}>
          <Input
            title="Title"
            type="text"
            name="cardTitle"
            onChange={value => handleInputValue(value)}
          />
          <Textarea
            title="Description"
            name="cardDescription"
            onChange={value => handleTextareaValue(value)}
          />
          <CardFormButton type="submit">Add</CardFormButton>
        </CardForm>
      </Modal>

      <Modal
        title="Edit card"
        modalVisibility={modalEditCard}
        onCloseClick={() => {
          toggleModalEditCard(!modalEditCard)
          clearFields();
        }}
      >
        {
          cards
            .filter((item: cardInterface) => item.id === currentCardId)
            .map((card: cardInterface) =>
            <CardForm
              key={card.id}
              onSubmit={onEditCard}
            >
              <Input
                title="Title"
                type="text"
                name="cardTitle"
                value={card.title}
                onChange={value => handleInputValue(value)}
              />
              <Textarea
                title="Description"
                name="cardDescription"
                value={card.description}
                onChange={value => handleTextareaValue(value)}
              />
              <CardFormButton type="submit">Edit</CardFormButton>
            </CardForm>
            )
        }

      </Modal>

      <Modal
        title="Card info"
        modalVisibility={modalInfoCard}
        onCloseClick={() => toggleModalInfoCard(!modalInfoCard)}
      >
        {
          cards
            .filter((item: cardInterface) => item.id === currentCardId)
            .map((card: cardInterface) =>
              <div key={card.id}>
                <CardInfo>
                  <CardInfoColumn>
                    {
                      columns
                        .find((column: columnInterface) => column.id === card.columnId)
                        .column
                    }
                  </CardInfoColumn>
                  <CardInfoTitle>{card.title}</CardInfoTitle>
                  <CardInfoDescription>{card.description}</CardInfoDescription>
                </CardInfo>
                <CommentsList
                  comments={comments.filter((comment: commentInterface) => comment.cardId === card.id)}
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
    </>
  );
};

export default Board;
