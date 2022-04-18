import React, { FC } from 'react';
import { IColumn, ICard, IComment } from '../../types/interfaces';
import { CardFunctions, ColumnFunctions } from '../../types/functions';
import { ColumnHeader, CardsList } from '../';
import { StyledColumn } from './styles';

interface ColumnProps extends ColumnFunctions, CardFunctions {
  column: IColumn;
  comments: IComment[];
  cards: ICard[];
}

const Column: FC<ColumnProps> = (props) => {
  return (
    <>
      <StyledColumn>
        <ColumnHeader
          column={props.column}
          cardsSum={props.cards.length || 0}
          onEditColumn={props.onEditColumn}
        />
        <CardsList
          comments={props.comments}
          cards={props.cards}
          onCardClick={props.onCardClick}
          onAddCard={props.onAddCard}
          onEditCard={props.onEditCard}
          onDeleteCard={props.onDeleteCard}
        />
      </StyledColumn>
    </>
  )
}

export default Column;
