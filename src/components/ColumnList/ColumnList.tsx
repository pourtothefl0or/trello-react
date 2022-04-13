import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cardsInterface } from '../../types/interfaces';
import { PRIMARY } from '../../constants';
import { Card } from '../';
import { CardAdd, Modal, Input, Textarea, Button } from '../../ui';

interface columnListInterface {
  idColumn: any;
  cards: cardsInterface[];
  onAddCard: (values: cardsInterface) => void;
  onEditCard: (values: cardsInterface) => void;
  onDeleteCard: (id: number) => void;
};

const ColumnList: FC<columnListInterface> = ({
  idColumn,
  cards,
  onAddCard,
  onEditCard,
  onDeleteCard
}) => {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  const [currentCardValues, setCurrentCardValues] = useState({
    id: 0,
    idColumn: 0,
    title: '',
    description: ''
  });

  const [modalAddCard, toggleModalAddCard] = useState(false);
  const addCard = (item: any) => {
    item.preventDefault();

    onAddCard({
      id: Date.now(),
      idColumn: idColumn,
      title: input,
      description: textarea
    });

    toggleModalAddCard(!modalAddCard);
    item.target.reset();
  };

  const [modalEditCard, toggleModalEditCard] = useState(false);
  const editCard = (item: any) => {
    item.preventDefault();

    onEditCard({
      id: currentCardValues.id,
      idColumn: currentCardValues.idColumn,
      title: input,
      description: textarea
    });

    toggleModalEditCard(!modalEditCard);
    item.target.reset();
  };

  return (
    <>
      <StyledColumnList>
        {
          cards.map((card: cardsInterface) =>
            <ColumnItem key={card.id}>
              <Card
                title={card.title}
                description={card.description}
                commentsSum={0}
                cardClick={() => {}}
                editClick={() => {
                  setCurrentCardValues({
                    id: card.id,
                    idColumn: card.idColumn,
                    title: card.title,
                    description: card.description
                  });
                  toggleModalEditCard(!modalEditCard);
                }}
                deleteClick={() => onDeleteCard(card.id)}
              />
            </ColumnItem>
          )
        }
        <ColumnItem>
          <CardAdd onClick={() => toggleModalAddCard(!modalAddCard)} />
        </ColumnItem>
      </StyledColumnList>

      {
        modalAddCard &&
          <Modal
            title="Add card"
            modalVisibility={modalAddCard}
            closeClick={() => toggleModalAddCard(!modalAddCard)}
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
              <CardFormButton>Add</CardFormButton>
            </CardForm>
          </Modal>
      }

      {
        modalEditCard &&
          <Modal
            title="Edit card"
            modalVisibility={modalEditCard}
            closeClick={() => toggleModalEditCard(!modalEditCard)}
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
              <CardFormButton>Edit</CardFormButton>
            </CardForm>
          </Modal>
      }
    </>
  );
};

const StyledColumnList = styled.ul``;

const ColumnItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${PRIMARY.indent};
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

export default ColumnList;
