import React, { FC, useState } from 'react';
import { IComment, IUser } from '../../types/interfaces';
import { CommentFunction } from '../../types/functions';
import { Comment } from '../';
import { Textarea, Button } from '../../ui';
import { StyledCommentsList, CommentItem, CommentForm } from './styles';

interface CommentsListProps extends CommentFunction {
  comments: IComment[];
  user: IUser;
  cardId: number;
}

const CommentsList: FC<CommentsListProps> = (props) => {
  const [textareaValue, setTextareaValue] = useState('');

  const addComment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (textareaValue) {
      props.onAddComment(props.cardId, textareaValue);
      setTextareaValue('');
    }
  }

  return (
    <StyledCommentsList>
      {
        props.comments.map((comment: IComment) =>
          <CommentItem key={comment.id}>
            <Comment
              name={props.user.name}
              commentId={comment.id}
              comment={comment.comment}
              onEditComment={props.onEditComment}
              onDeleteComment={() => props.onDeleteComment(comment.id)}
            />
        </CommentItem>
        )
      }
      <CommentItem>
        <CommentForm onSubmit={addComment}>
          <Textarea
            name="cardDescription"
            placeholder="Add a comment..."
            value={textareaValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
            required
          />
          <Button>Add</Button>
        </CommentForm>
      </CommentItem>
    </StyledCommentsList>
  )
}

export default CommentsList;
