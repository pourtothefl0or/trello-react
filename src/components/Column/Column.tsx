import React from 'react';
import { IColumn, ICard, IComment } from '../../types/interfaces';
import { CardFunctions, ColumnFunctions } from '../../types/functions';
import { ColumnHeader, CardsList } from '../';
import { StyledColumn } from './styles';

interface ColumnProps extends ColumnFunctions, CardFunctions {
  column: IColumn;
  comments: IComment[];
  cards: ICard[];
}

const Column: React.FC<ColumnProps> = ({ column, cards, comments, ...props}) => {
  return (
    <StyledColumn>
      <ColumnHeader
        column={column}
        cardsSum={cards.length || 0}
        onEditColumn={props.onEditColumn}
      />
      <CardsList
        comments={comments}
        cards={cards}
        onCardClick={props.onCardClick}
        onAddCardClick={props.onAddCardClick}
        onEditCardClick={props.onEditCardClick}
        onDeleteCardClick={props.onDeleteCardClick}
      />
    </StyledColumn>
  )
}

export default Column;
