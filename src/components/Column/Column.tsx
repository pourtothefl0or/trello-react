import React from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { ColumnHeader, ColumnList } from '../';

const Column = ({ title, cards, comments, cardClick, ...props }: any) => {
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
        addCardClick={props.addCardClick}
        editCardClick={props.editCardClick}
        deleteCardClick={props.deleteCardClick}
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
