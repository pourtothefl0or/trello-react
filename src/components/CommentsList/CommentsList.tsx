import React, { FC, useState } from 'react';
import { IComment, IUser } from '../../types/interfaces';
import { Comment } from '../';
import { Textarea, Button } from '../../ui';
import { StyledCommentsList, CommentItem, CommentForm } from './styles';

interface CommentsListProps {
  comments: IComment[];
  user: IUser;
  cardId: number;
  onAddComment: (id: number, comment: string) => void;
  onEditComment: (id: number, comment: string) => void;
  onDeleteComment: (id: number) => void;
};

const CommentsList: FC<CommentsListProps> = (props) => {
  const [textareaValue, setTextareaValue] = useState('');

  const addComment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onAddComment(props.cardId, textareaValue);
    setTextareaValue('');
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
            value={textareaValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
          />
          <Button>Add</Button>
        </CommentForm>
      </CommentItem>
    </StyledCommentsList>
  );
};

export default CommentsList;
