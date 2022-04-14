import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { ColumnHeader, ColumnsList } from '../';
import { cardsInterface, columnsInterface, commentsInterface, usersInterface } from '../../types/interfaces';

interface columnInterface {
  idColumn: any;
  title: string;
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

const Column: FC<columnInterface> = ({
  idColumn,
  title,
  onEditColumn,
  cards,
  onAddCard,
  onEditCard,
  onDeleteCard,
  users,
  comments,
  onAddComment,
  onEditComment,
  onDeleteComment
}) => {
  return (
    <>
      <StyledColumn>
        <ColumnHeader
          title={title}
          cardsSum={cards.length || 0}
          onEditColumn={onEditColumn}
        />
        <ColumnsList
          idColumn={idColumn}
          cards={cards}
          onAddCard={onAddCard}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
          users={users}
          comments={comments}
          onAddComment={onAddComment}
          onEditComment={onEditComment}
          onDeleteComment={onDeleteComment}
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
