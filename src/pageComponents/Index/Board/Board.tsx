import React, { FC, useState } from 'react';
import { cardsInterface, columnsInterface, commentsInterface, usersInterface } from '../../../types/interfaces';
import { Column } from '../../../components';
import { StyledBoard, BoardContainer } from './styles';

interface boardInterface {
  users: usersInterface[];
};

const Board: FC<boardInterface> = ({ ...props }) => {
  // arrays
  const defaultColumnsArr = [
    { id: 1, column: 'To Do' },
    { id: 2, column: 'In progress' },
    { id: 3, column: 'Testing' },
    { id: 4, column: 'Done' },
  ];

  const [columns, setColumns] = useState(JSON.parse(localStorage.getItem('columns')!) || defaultColumnsArr);

  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')!) || []);

  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')!) || [])

  // columns
  const onEditColumn = (values: columnsInterface) => {
    const columsnDuplicate = [...columns];
    const findColumn = columsnDuplicate.find((column: columnsInterface) => column.id === values.id);
    findColumn.column = values.column;

    setColumns(columsnDuplicate);
    localStorage.setItem('columns', JSON.stringify(columsnDuplicate));
  };

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
    findComment.comment = values.comment;

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
                column={{
                  id: column.id,
                  column: column.column
                }}
                onEditColumn={onEditColumn}
                cards={cards.filter((card: cardsInterface) => card.idColumn === column.id)}
                onAddCard={onAddCard}
                onEditCard={onEditCard}
                onDeleteCard={onDeleteCard}
                users={props.users}
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

export default Board;
