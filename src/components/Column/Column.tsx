import React, { FC } from 'react';
import styled from 'styled-components';
import { ARRAYS, COLORS, PRIMARY } from '../../constants';
import { ColumnHeader, ColumnList } from '../';
import { cardsInterface } from '../../types/interfaces';

interface columnInterface {
  idTitle: number;
  title: string;
};

const Column: FC<columnInterface> = ({ idTitle, title }) => {
  return (
    <>
      <StyledColumn>
        <ColumnHeader
          title={title}
          cardsSum={
            ARRAYS.cards
              .filter((card: cardsInterface) => card.idTitle === idTitle)
              .length
          }
        />
        <ColumnList idTitle={idTitle}/>
      </StyledColumn>
    </>
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
