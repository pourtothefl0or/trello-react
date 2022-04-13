import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cardsInterface, columnsInterface } from '../../../types/interfaces';
import { PRIMARY } from '../../../constants';
import { Container, Column } from '../../../components';

const Board: FC = () => {
  // columns
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do'
    },
    {
      id: 2,
      title: 'In progress'
    },
    {
      id: 3,
      title: 'Testing'
    },
    {
      id: 4,
      title: 'Done'
    },
  ]);

  // cards
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')!) || []);
  const onAddCard = (values: cardsInterface) => {
    const newArr = [...cards, values];

    setCards(newArr);
    localStorage.setItem('cards', JSON.stringify(newArr));
  };

  const onEditCard = (values: cardsInterface) => {
    const card = cards.find((card: cardsInterface) => card.id === values.id);
    [card.title, card.description] = [values.title, values.description];

    setCards(cards);
    localStorage.setItem('cards', JSON.stringify(cards));
  };

  const onDeleteCard = (id: number) => {
    const newArr = cards.filter((card: cardsInterface) => card.id !== id);

    setCards(newArr);
    localStorage.setItem('cards', JSON.stringify(newArr));
  };

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            columns.map((column: columnsInterface) =>
              <Column
                key={column.id}
                idColumn={column.id}
                title={column.title}
                cards={cards.filter((card: cardsInterface) => card.idColumn === column.id)}
                onAddCard={onAddCard}
                onEditCard={onEditCard}
                onDeleteCard={onDeleteCard}
              />
            )
          }
        </BoardContainer>
      </StyledBoard>
    </>
  );
};

const StyledBoard = styled.section`
  overflow-x: auto;
  width: 100%;
  height: 100vh;
`;

const BoardContainer = styled(Container)`
  display: flex;
  column-gap: ${PRIMARY.indent};
  padding-top: ${PRIMARY.containerIndent};
  padding-bottom: ${PRIMARY.containerIndent};
  height: 100%;
`;

export default Board;
