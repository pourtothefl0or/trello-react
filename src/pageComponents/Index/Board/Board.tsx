import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { titlesInterface } from '../../../types/interfaces';
import { ARRAYS, PRIMARY } from '../../../constants';
import { Container, Column } from '../../../components';

const Board: FC = () => {
  const [titles, changeTitlesArr] = useState(ARRAYS.titles);

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            titles.map((column: titlesInterface) =>
              <Column
                key={column.id}
                idTitle={column.id}
                title={column.title}
              />
            )
          }
        </BoardContainer>
      </StyledBoard>
    </>
  );
};

const StyledBoard = styled.section`
  overflow-x: auto;
  width: 100%;
  height: 100%;
`;

const BoardContainer = styled(Container)`
  display: flex;
  column-gap: ${PRIMARY.indent};
  padding-top: ${PRIMARY.containerIndent};
  padding-bottom: ${PRIMARY.containerIndent};
`;

export default Board;
