import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { commentsInterface, usersInterface } from '../../types/interfaces';
import { Comment } from '../';
import { Textarea, Button, Input } from '../../ui';

interface commentsListInterface {
  users: usersInterface[];
  comments: commentsInterface[];
  currentIdCard: number;
  onAddComment: (values: commentsInterface) => void;
  onEditComment: (values: commentsInterface) => void;
  onDeleteComment: (id: number) => void;
};

const CommentsList: FC<commentsListInterface> = ({
  users,
  comments,
  currentIdCard,
  onAddComment,
  onEditComment,
  onDeleteComment,
}) => {
  const [textarea, setTextarea] = useState('');

  const addComment = (item: any) => {
    item.preventDefault();

    onAddComment({
      id: Date.now(),
      idCard: currentIdCard,
      idUser: users[0].id,
      comment: textarea
    });

    item.target.reset();
  };

  return (
    <StyledCommentsList>
      {
        comments.map((comment: commentsInterface) =>
          <CommentItem key={comment.id}>
            <Comment
              name={
                users
                  .find((user: usersInterface) => user.id === comment.idUser)
                  ?.name
              }
              comment={comment.comment}
              onSubmitClick={(value: string) =>
                onEditComment({
                  id: comment.id,
                  idCard: comment.idCard,
                  idUser: comment.idUser,
                  comment: value
                })
              }
              onDeleteClick={() => onDeleteComment(comment.id)}
            />
        </CommentItem>
        )
      }
      <CommentItem>
        <CommentForm onSubmit={addComment}>
          <Textarea
            name="cardDescription"
            placeholder="Add a comment..."
            onChange={item => setTextarea(item)}
          />
          <Button>Add</Button>
        </CommentForm>
      </CommentItem>
    </StyledCommentsList>
  );
};

const StyledCommentsList = styled.ul`
  margin-bottom: 40px;
`;

const CommentItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const CommentForm = styled.form`
  display: flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default CommentsList;
