import React, { FC } from 'react';
import { cardInterface, columnInterface, commentInterface } from '../../types/interfaces';
import { ColumnHeader, CardsList } from '../';
import { StyledColumn } from './styles';

interface ColumnProps {
  column: columnInterface;
  comments: commentInterface[];
  onEditColumn: (values: columnInterface) => void;
  cards: cardInterface[];
  onCardClick: (id: number) => void;
  onAddCard: () => void;
  onEditCard: (id: number) => void;
  onDeleteCard: (id: number) => void;
};

const Column: FC<ColumnProps> = (props) => {
  return (
    <>
      <StyledColumn>
        <ColumnHeader
          column={props.column}
          onEditColumn={props.onEditColumn}
          cardsSum={props.cards.length || 0}
        />
        <CardsList
          columnId={props.column.id}
          comments={props.comments}
          cards={props.cards}
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
