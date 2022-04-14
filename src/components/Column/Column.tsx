import React, { FC } from 'react';
import { cardsInterface, columnsInterface, commentsInterface, usersInterface } from '../../types/interfaces';
import { ColumnHeader, CardsList } from '../';
import { StyledColumn } from './styles';

interface columnInterface {
  column: columnsInterface;
  onEditColumn: (values: columnsInterface) => void;
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

const Column: FC<columnInterface> = ({ ...props }) => {
  return (
    <>
      <StyledColumn>
        <ColumnHeader
          column={props.column}
          onEditColumn={props.onEditColumn}
          cardsSum={props.cards.length || 0}
        />
        <CardsList
          idColumn={props.column.id}
          cards={props.cards}
          onAddCard={props.onAddCard}
          onEditCard={props.onEditCard}
          onDeleteCard={props.onDeleteCard}
          users={props.users}
          comments={props.comments}
          onAddComment={props.onAddComment}
          onEditComment={props.onEditComment}
          onDeleteComment={props.onDeleteComment}
        />
      </StyledColumn>
    </>
  );
};

export default Column;
