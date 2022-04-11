import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { ColumnHeader, ColumnList } from '../';
import { titlesInterface, cardsInterface, commentsInterface } from '../../types/interfaces';

interface columnInterface {
  title: string;
  cards: cardsInterface[];
  comments: commentsInterface[];
  cardClick: () => void;
  addCardClick: () => void;
  editCardClick: () => void;
  deleteCardClick: () => void;
};

const Column: FC<columnInterface> = ({
  title,
  cards,
  comments,
  cardClick,
  addCardClick,
  editCardClick,
  deleteCardClick
}) => {
  return (
    <StyledColumn>
      <ColumnHeader
        title={title}
        cardsSum={cards.length}
      />
      <ColumnList
        cards={cards}
        comments={comments}
        cardClick={cardClick}
        addCardClick={addCardClick}
        editCardClick={editCardClick}
        deleteCardClick={deleteCardClick}
        />
    </StyledColumn>
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

export default Column;
