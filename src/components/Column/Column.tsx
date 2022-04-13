import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { ColumnHeader, ColumnList } from '../';
import { cardsInterface } from '../../types/interfaces';

interface columnInterface {
  idColumn: any;
  title: string;
  cards: cardsInterface[];
  onAddCard: (values: cardsInterface) => void;
  onEditCard: (values: cardsInterface) => void;
  onDeleteCard: (id: number) => void;
};

const Column: FC<columnInterface> = ({
  idColumn,
  title,
  cards,
  onAddCard,
  onEditCard,
  onDeleteCard
}) => {
  return (
    <>
      <StyledColumn>
        <ColumnHeader
          title={title}
          cardsSum={
            cards.length
            || 0
          }
        />
        <ColumnList
          idColumn={idColumn}
          cards={cards}
          onAddCard={onAddCard}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
        />
      </StyledColumn>
    </>
  );
};

const StyledColumn = styled.div`
  flex: 0 0 ${PRIMARY.column};
  padding: 0 20px 20px;
  border-radius: ${PRIMARY.border};
  height: 100%;
  background-color: ${COLORS.white};

  @media (max-width: 599px) {
    flex-basis: 100%;
  }
`;

export default Column;
