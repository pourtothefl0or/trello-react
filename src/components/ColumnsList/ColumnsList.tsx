import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cardsInterface, commentsInterface, usersInterface } from '../../types/interfaces';
import { COLORS } from '../../constants';
import { Card, CommentsList } from '../';
import { CardAdd, Modal, Input, Textarea, Button } from '../../ui';

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

const ColumnsList: FC<ColumnsListInterface> = ({
  idColumn,
  cards,
  onAddCard,
  onEditCard,
  onDeleteCard,
  users,
  comments,
  onAddComment,
  onEditComment,
  onDeleteComment,
}) => {
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

    onAddCard({
      id: Date.now(),
      idColumn: idColumn,
      title: input,
      description: textarea
    });

    toggleModalAddCard(!modalAddCard);
    event.target.reset();
  };

  const [modalEditCard, toggleModalEditCard] = useState(false);
  const editCard = (event: any) => {
    event.preventDefault();

    onEditCard({
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
      <StyledColumnsList>
        {
          cards.map((card: cardsInterface) =>
            <ColumnItem key={card.id}>
              <Card
                title={card.title}
                commentsSum={
                  comments
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
                onDeleteClick={() => onDeleteCard(card.id)}
              />
            </ColumnItem>
          )
        }
        <ColumnItem>
          <CardAdd onClick={() => toggleModalAddCard(!modalAddCard)} />
        </ColumnItem>
      </StyledColumnsList>

      {
        modalAddCard &&
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
                onChange={item => setInput(item)}
              />
              <Textarea
                title="Description"
                name="cardDescription"
                onChange={item => setTextarea(item)}
              />
              <CardFormButton type="submit">Add</CardFormButton>
            </CardForm>
          </Modal>
      }

      {
        modalEditCard &&
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
                onChange={item => setInput(item)}
              />
              <Textarea
                title="Description"
                name="cardDescription"
                defaultValue={currentCardValues.description}
                onChange={item => setTextarea(item)}
              />
              <CardFormButton type="submit">Edit</CardFormButton>
            </CardForm>
          </Modal>
      }

      {
        modalInfoCard &&
          <Modal
            title="Card info"
            modalVisibility={modalInfoCard}
            onCloseClick={() => toggleModalInfoCard(!modalInfoCard)}
          >
            <ModalCardInfo>
              <CardInfoTitle>{currentCardValues.title}</CardInfoTitle>
              <CardInfoDescription>{currentCardValues.description}</CardInfoDescription>
            </ModalCardInfo>
            <CommentsList
              users={users}
              comments={comments.filter((comment: commentsInterface) => comment.idCard === currentCardValues.id)}
              currentIdCard={currentCardValues.id}
              onAddComment={onAddComment}
              onEditComment={onEditComment}
              onDeleteComment={onDeleteComment}
            />
          </Modal>
      }
    </>
  );
};

const StyledColumnsList = styled.ul``;

const ColumnItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const CardFormButton = styled(Button)`
  align-self: center;
`;

const ModalCardInfo = styled.div`
  margin-bottom: 40px;
`;

const CardInfoTitle = styled.h3`
  margin: 0 0 20px;
  color: ${COLORS.black};
`;

const CardInfoDescription = styled.p`
  margin: 0;
  color: ${COLORS.black};
`;

export default ColumnsList;
