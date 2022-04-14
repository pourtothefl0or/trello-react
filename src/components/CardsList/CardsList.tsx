import React, { FC, useState } from 'react';
import { cardsInterface, commentsInterface, usersInterface } from '../../types/interfaces';
import { Card, CommentsList } from '../';
import { CardAdd, Modal, Input, Textarea } from '../../ui';
import { StyledCardsList, CardsItem, CardForm, CardFormButton, CardInfo, CardInfoTitle, CardInfoDescription } from './styles';

interface ColumnsListInterface {
  idColumn: any;
  cards: cardsInterface[];
  onAddCard: (values: cardsInterface) => void;
  onEditCard: (values: cardsInterface) => void;
  onDeleteCard: (id: number) => void;
  users: usersInterface[];
  comments: commentsInterface[];
  onAddComment: (values: commentsInterface) => void;
  onEditComment: (values: commentsInterface) => void;
  onDeleteComment: (id: number) => void;
};

const ColumnsList: FC<ColumnsListInterface> = ({ ...props }) => {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  const [currentCardValues, setCurrentCardValues] = useState({
    id: 0,
    idColumn: 0,
    title: '',
    description: ''
  });

  // cards
  const [modalAddCard, toggleModalAddCard] = useState(false);
  const addCard = (event: any) => {
    event.preventDefault();

    props.onAddCard({
      id: Date.now(),
      idColumn: props.idColumn,
      title: input,
      description: textarea
    });

    toggleModalAddCard(!modalAddCard);
    event.target.reset();
  };

  const [modalEditCard, toggleModalEditCard] = useState(false);
  const editCard = (event: any) => {
    event.preventDefault();

    props.onEditCard({
      id: currentCardValues.id,
      idColumn: currentCardValues.idColumn,
      title: input,
      description: textarea
    });

    toggleModalEditCard(!modalEditCard);
    event.target.reset();
  };

  const [modalInfoCard, toggleModalInfoCard] = useState(false);

  return (
    <>
      <StyledCardsList>
        {
          props.cards.map((card: cardsInterface) =>
            <CardsItem key={card.id}>
              <Card
                title={card.title}
                commentsSum={
                  props.comments
                    .filter((comment: commentsInterface) => comment.idCard === card.id)
                    .length
                }
                cardClick={() => {
                  setCurrentCardValues({
                    id: card.id,
                    idColumn: card.idColumn,
                    title: card.title,
                    description: card.description
                  });
                  toggleModalInfoCard(!modalInfoCard);
                }}
                onEditClick={() => {
                  setCurrentCardValues({
                    id: card.id,
                    idColumn: card.idColumn,
                    title: card.title,
                    description: card.description
                  });
                  toggleModalEditCard(!modalEditCard);
                }}
                onDeleteClick={() => props.onDeleteCard(card.id)}
              />
            </CardsItem>
          )
        }

        <CardsItem>
          <CardAdd onClick={() => toggleModalAddCard(!modalAddCard)} />
        </CardsItem>
      </StyledCardsList>

      <Modal
        title="Add card"
        modalVisibility={modalAddCard}
        onCloseClick={() => toggleModalAddCard(!modalAddCard)}
      >
        <CardForm onSubmit={addCard}>
          <Input
            title="Title"
            type="text"
            name="cardTitle"
            onChange={value => setInput(value)}
          />
          <Textarea
            title="Description"
            name="cardDescription"
            onChange={value => setTextarea(value)}
          />
          <CardFormButton type="submit">Add</CardFormButton>
        </CardForm>
      </Modal>

      <Modal
        title="Edit card"
        modalVisibility={modalEditCard}
        onCloseClick={() => toggleModalEditCard(!modalEditCard)}
      >
        <CardForm onSubmit={editCard}>
          <Input
            title="Title"
            type="text"
            name="cardTitle"
            defaultValue={currentCardValues.title}
            onChange={value => setInput(value)}
          />
          <Textarea
            title="Description"
            name="cardDescription"
            defaultValue={currentCardValues.description}
            onChange={value => setTextarea(value)}
          />
          <CardFormButton type="submit">Edit</CardFormButton>
        </CardForm>
      </Modal>

      <Modal
        title="Card info"
        modalVisibility={modalInfoCard}
        onCloseClick={() => toggleModalInfoCard(!modalInfoCard)}
      >
        <CardInfo>
          <CardInfoTitle>{currentCardValues.title}</CardInfoTitle>
          <CardInfoDescription>{currentCardValues.description}</CardInfoDescription>
        </CardInfo>
        <CommentsList
          users={props.users}
          comments={props.comments.filter((comment: commentsInterface) => comment.idCard === currentCardValues.id)}
          currentIdCard={currentCardValues.id}
          onAddComment={props.onAddComment}
          onEditComment={props.onEditComment}
          onDeleteComment={props.onDeleteComment}
        />
      </Modal>
    </>
  );
};

export default ColumnsList;
