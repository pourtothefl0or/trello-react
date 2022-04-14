import React, { FC, useState, useRef } from 'react';
import { Button, Input } from '../../ui';
import { StyledComment, CommentHeader, CommentUserLogo, CommentUserName, CommentPopupMore, CommentsText, CommentForm } from './styles';
import { useOnClickOutside } from '../../customHooks';

interface commentInterface {
  name: string | undefined;
  comment: string;
  onSubmitClick: (value: string) => void;
  onDeleteClick: () => void;
};

const Comment: FC<commentInterface> = ({ ...props }) => {
  const rootRef = useRef(null);

  const [editMode, toggleEditMode] = useState(false);
  useOnClickOutside(rootRef, () => toggleEditMode(false));

  const [input, setInput] = useState('');

  const editComment = (event: any) => {
    event.preventDefault();

    props.onSubmitClick(input);

    toggleEditMode(!editMode);
    event.target.reset();
  };

  return (
    <StyledComment ref={rootRef}>
      <CommentHeader>
        <CommentUserLogo>{props.name?.split('')[0]}</CommentUserLogo>
        <CommentUserName>{props.name}</CommentUserName>
        <CommentPopupMore
          onEditClick={() => toggleEditMode(!editMode)}
          onDeleteClick={props.onDeleteClick}
        />
      </CommentHeader>
      {
        !editMode
          ?
          <CommentsText>{props.comment}</CommentsText>
          :
          <CommentForm onSubmit={editComment}>
            <Input
              type="text"
              name="commentText"
              defaultValue={props.comment}
              onChange={value => setInput(value)}
            />
            <Button type="submit">Edit</Button>
          </CommentForm>
      }
    </StyledComment>
  );
};

export default Comment;
