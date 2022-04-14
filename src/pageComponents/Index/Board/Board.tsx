import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cardsInterface, columnsInterface, commentsInterface, usersInterface } from '../../../types/interfaces';
import { PRIMARY } from '../../../constants';
import { Container, Column } from '../../../components';

interface boardInterface {
  users: usersInterface[];
};

const Board: FC<boardInterface> = ({ users }) => {
  // columns
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do'
    },
    {
      id: 2,
      title: 'In progress'
    },
    {
      id: 3,
      title: 'Testing'
    },
    {
      id: 4,
      title: 'Done'
    },
  ]);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')!) || []);
  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')!) || [])

  // cards
  const onAddCard = (values: cardsInterface) => {
    setCards([...cards, values]);
    localStorage.setItem('cards', JSON.stringify([...cards, values]));
  };

  const onEditCard = (values: cardsInterface) => {
    const cardsDuplicate = [...cards];
    const findCard = cardsDuplicate.find((card: cardsInterface) => card.id === values.id);
    [findCard.title, findCard.description] = [values.title, values.description];

    setCards(cardsDuplicate);
    localStorage.setItem('cards', JSON.stringify(cardsDuplicate));
  };

  const onDeleteCard = (id: number) => {
    const newCards = cards.filter((card: cardsInterface) => card.id !== id);
    const newComments = comments.filter((comment: commentsInterface) => comment.idCard !== id);

    setCards(newCards);
    setComments(newComments);

    localStorage.setItem('cards', JSON.stringify(newCards));
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  // comments
  const onAddComment = (values: commentsInterface) => {
    setComments([...comments, values]);
    localStorage.setItem('comments', JSON.stringify([...comments, values]));
  };

  const onEditComment = (values: commentsInterface) => {
    const commentsDuplicate = [...comments];
    const findComment = commentsDuplicate.find((comment: commentsInterface) => comment.id === values.id);
    [findComment.comment] = [values.comment];

    setComments(commentsDuplicate);
    localStorage.setItem('comments', JSON.stringify(commentsDuplicate));
  };

  const onDeleteComment = (id: number) => {
    const newArr = comments.filter((comment: commentsInterface) => comment.id !== id);

    setComments(newArr);
    localStorage.setItem('comments', JSON.stringify(newArr));
  };

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            columns.map((column: columnsInterface) =>
              <Column
                key={column.id}
                idColumn={column.id}
                title={column.title}
                cards={cards.filter((card: cardsInterface) => card.idColumn === column.id)}
                onAddCard={onAddCard}
                onEditCard={onEditCard}
                onDeleteCard={onDeleteCard}
                users={users}
                comments={comments}
                onAddComment={onAddComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
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
  height: 100vh;
`;

const BoardContainer = styled(Container)`
  display: flex;
  column-gap: 20px;
  padding-top: ${PRIMARY.containerIndent};
  padding-bottom: ${PRIMARY.containerIndent};
  height: 100%;
`;

export default Board;
