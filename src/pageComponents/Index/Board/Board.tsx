import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { titlesInterface } from '../../../types/interfaces';
import { PRIMARY } from '../../../constants';
import { Container, Column } from '../../../components';

const Board: FC = () => {
  const [users, changeUsersArr] = useState([
    {
      id: 1,
      name: 'Biba',
    },
    {
      id: 2,
      name: 'Ne Biba',
    },
  ]);

  const [titles, changeTitlesArr] = useState([
    {
      id: 1,
      idUser: 1,
      title: 'To Do'
    },
    {
      id: 2,
      idUser: 1,
      title: 'In progress'
    },
    {
      id: 3,
      idUser: 1,
      title: 'Testing'
    },
    {
      id: 4,
      idUser: 1,
      title: 'Done'
    },
  ]);

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
                users={users}
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
