import React, { FC, useState } from 'react';
import { commentsInterface, usersInterface } from '../../types/interfaces';
import { Comment } from '../';
import { Textarea, Button } from '../../ui';
import { StyledCommentsList, CommentItem, CommentForm } from './styles';

interface commentsListInterface {
  users: usersInterface[];
  comments: commentsInterface[];
  currentIdCard: number;
  onAddComment: (values: commentsInterface) => void;
  onEditComment: (values: commentsInterface) => void;
  onDeleteComment: (id: number) => void;
};

const CommentsList: FC<commentsListInterface> = ({ ...props }) => {
  const [textarea, setTextarea] = useState('');

  const addComment = (event: any) => {
    event.preventDefault();

    props.onAddComment({
      id: Date.now(),
      idCard: props.currentIdCard,
      idUser: props.users[0].id,
      comment: textarea
    });

    event.target.reset();
  };

  return (
    <StyledCommentsList>
      {
        props.comments.map((comment: commentsInterface) =>
          <CommentItem key={comment.id}>
            <Comment
              name={
                props.users
                  .find((user: usersInterface) => user.id === comment.idUser)
                  ?.name
              }
              comment={comment.comment}
              onSubmitClick={(value: string) =>
                props.onEditComment({
                  id: comment.id,
                  idCard: comment.idCard,
                  idUser: comment.idUser,
                  comment: value
                })
              }
              onDeleteClick={() => props.onDeleteComment(comment.id)}
            />
        </CommentItem>
        )
      }
      <CommentItem>
        <CommentForm onSubmit={addComment}>
          <Textarea
            name="cardDescription"
            placeholder="Add a comment..."
            onChange={value => setTextarea(value)}
          />
          <Button>Add</Button>
        </CommentForm>
      </CommentItem>
    </StyledCommentsList>
  );
};

export default CommentsList;
