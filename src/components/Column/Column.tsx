import React, { FC } from 'react';
import { ICard, IColumn, IComment } from '../../types/interfaces';
import { ColumnHeader, CardsList } from '../';
import { StyledColumn } from './styles';

interface ColumnProps {
  column: IColumn;
  comments: IComment[];
  onEditColumn: (values: IColumn) => void;
  cards: ICard[];
  onCardClick: (id: number) => void;
  onAddCard: () => void;
  onEditCard: (id: number) => void;
  onDeleteCard: (id: number) => void;
};

const Column: FC<ColumnProps> = (props) => {
  const { column, cards, comments } = props;

  return (
    <>
      <StyledColumn>
        <ColumnHeader
          column={column}
          onEditColumn={props.onEditColumn}
          cardsSum={cards.length || 0}
        />
        <CardsList
          columnId={column.id}
          comments={comments}
          cards={cards}
          onCardClick={props.onCardClick}
          onAddCard={props.onAddCard}
          onEditCard={props.onEditCard}
          onDeleteCard={props.onDeleteCard}
        />
      </StyledColumn>
    </>
  );
};

export default Column;
