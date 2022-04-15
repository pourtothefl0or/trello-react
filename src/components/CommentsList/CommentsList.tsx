import React, { FC, useState } from 'react';
import { commentInterface, userInterface } from '../../types/interfaces';
import { Comment } from '../';
import { Textarea, Button } from '../../ui';
import { StyledCommentsList, CommentItem, CommentForm } from './styles';

interface CommentsListProps {
  comments: commentInterface[];
  user: userInterface;
  cardId: number;
  onAddComment: (id: number, comment: string) => void;
  onEditComment: (id: number, comment: string) => void;
  onDeleteComment: (id: number) => void;
};

const CommentsList: FC<CommentsListProps> = (props) => {
  const [textareaValue, hundleTextereaValue] = useState('');

  const addComment = (event: any) => {
    event.preventDefault();
    props.onAddComment(props.cardId, textareaValue)
    event.target.reset();
  }

  return (
    <StyledCommentsList>
      {
        props.comments.map((comment: commentInterface) =>
          <CommentItem key={comment.id}>
            <Comment
              name={props.user.name}
              commentId={comment.id}
              comment={comment.comment}
              onEditComment={props.onEditComment}
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
            onChange={value => hundleTextereaValue(value)}
          />
          <Button>Add</Button>
        </CommentForm>
      </CommentItem>
    </StyledCommentsList>
  );
};

export default CommentsList;
