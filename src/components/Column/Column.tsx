import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cardsInterface, usersInterface, } from '../../types/interfaces';
import { COLORS, PRIMARY } from '../../constants';
import { ColumnHeader, ColumnList } from '../';
import { Modal, Input, Textarea, Button } from '../../ui';

interface columnInterface {
  idTitle: number;
  title: string;
  users: usersInterface[];
};

const Column: FC<columnInterface> = ({ idTitle, title, users }) => {
  const [cards, changeCardsArr] = useState([
    {
      id: 1,
      idTitle: 1,
      title: 'Brainstorming',
      description: 'Old fashioned recipe for preventing allergies and chemical sensitivities',
    },
    {
      id: 2,
      idTitle: 1,
      title: 'Brainstorming',
      description: 'Home business advertising ideas',
    },
    {
      id: 3,
      idTitle: 1,
      title: 'Brainstorming',
      description: 'Cosmetic surgery abroad making the right choice',
    },
    {
      id: 4,
      idTitle: 2,
      title: 'Brainstorming',
      description: 'Unmatched toner cartridge quality 20 less than oem price',
    },
    {
      id: 5,
      idTitle: 2,
      title: 'Brainstorming',
      description: 'How to look up',
    },
    {
      id: 6,
      idTitle: 3,
      title: 'Brainstorming',
      description: 'Types of paper in catalog printing',
    },
    {
      id: 7,
      idTitle: 3,
      title: 'Brainstorming',
      description: 'There is no competition',
    },
    {
      id: 8,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Linux or windows which is it',
    },
    {
      id: 9,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Be single minded',
    },
    {
      id: 10,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Linux or windows which is it',
    },
    {
      id: 11,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Dna the future of nutrition',
    },
  ]);

  const cardsFilterByIdTitle = cards.filter((card: cardsInterface) => card.idTitle === idTitle);

  const [modalAddCard, toggleModalAddCard] = useState(false);
  const addCard = (item: any) => {
    item.preventDefault();

    const { cardTitle, cardDescription } = item.target.elements;
    changeCardsArr([
      ...cards,
      {
        id: ++cards.length,
        idTitle: 1,
        title: cardTitle.value,
        description: cardDescription.value
      }
    ]);

    toggleModalAddCard(!modalAddCard);
    item.target.reset();
  };

  return (
    <>
      <StyledColumn>
        <ColumnHeader
          title={title}
          cardsSum={cardsFilterByIdTitle.length}
        />
        <ColumnList
          cards={cardsFilterByIdTitle}
          users={users}
          cardAddClick={() => toggleModalAddCard(!modalAddCard)}
        />
      </StyledColumn>

      {
        modalAddCard &&
          <Modal
            title="Add card"
            modalVisibility={modalAddCard}
            closeClick={() => toggleModalAddCard(!modalAddCard)}
          >
            <CardForm onSubmit={e => addCard(e)}>
              <Input
                title="Title"
                type="text"
                name="cardTitle"
              />
              <Textarea
                title="Description"
                name="cardDescription"
              />
              <CardFormButton>Add</CardFormButton>
            </CardForm>
          </Modal>
      }
    </>
  );
};

const StyledColumn = styled.div`
  flex: 0 0 ${PRIMARY.column};
  padding: 0 20px 20px;
  border-radius: ${PRIMARY.border};
  background-color: ${COLORS.white};

  @media (max-width: 599px) {
    flex-basis: 100%;
  }
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const CardFormButton = styled(Button)`
  align-self: start;

  @media (max-width: 599px) {
    align-self: center;
  }
`;

export default Column;
