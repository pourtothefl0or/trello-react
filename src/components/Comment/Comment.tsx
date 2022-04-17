import React, { FC, useState } from 'react';
import { Button, Input } from '../../ui';
import { StyledComment, CommentHeader, CommentUserLogo, CommentUserName, CommentPopupMore, CommentsText, CommentForm } from './styles';

interface CommentProps {
  name: string | undefined;
  commentId: number;
  comment: string;
  onEditComment: (id: number, comment: string) => void;
  onDeleteClick: () => void;
};

const Comment: FC<CommentProps> = ({ ...props }) => {
  const [editMode, handleEditMode] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const editComment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputValue) {
      props.onEditComment(props.commentId, inputValue);
    }

    handleEditMode(!editMode);
    setInputValue('');
  };

  return (
    <StyledComment>
      <CommentHeader>
        <CommentUserLogo>{props.name?.split('')[0]}</CommentUserLogo>
        <CommentUserName>{props.name}</CommentUserName>
        <CommentPopupMore
          onEditClick={() => handleEditMode(!editMode)}
          onDeleteClick={props.onDeleteClick}
        />
      </CommentHeader>
      {
        editMode
          ?
            <CommentForm onSubmit={editComment}>
            <Input
              type="text"
              name="commentText"
              value={
                inputValue === ''
                  ? props.comment
                  : inputValue
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
            <Button type="submit">Edit</Button>
          </CommentForm>
          :
          <CommentsText>{props.comment}</CommentsText>

      }
    </StyledComment>
  );
};

export default Comment;
