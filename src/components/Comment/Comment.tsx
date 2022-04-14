import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { commentsInterface } from '../../types/interfaces';
import { COLORS, PRIMARY } from '../../constants';
import { Button, Input, PopupMore } from '../../ui';

interface commentInterface {
  name: string | undefined;
  comment: string;
  onSubmitClick: (value: string) => void;
  onDeleteClick: () => void;
};

const Comment: FC<commentInterface> = ({
  name,
  comment,
  onSubmitClick,
  onDeleteClick
}) => {
  const [editMode, toggleEditMode] = useState(false);

  const [input, setInput] = useState('');

  const editComment = (event: any) => {
    event.preventDefault();

    onSubmitClick(input);

    toggleEditMode(!editMode);
    event.target.reset();
  };

  return (
    <StyledComment>
      <CommentHeader>
        <CommentUserLogo>{name?.split('')[0]}</CommentUserLogo>
        <CommentUserName>{name}</CommentUserName>
        <CommentPopupMore
          onEditClick={() => toggleEditMode(!editMode)}
          onDeleteClick={onDeleteClick}
        />
      </CommentHeader>
      {
        !editMode
          ? <CommentsText>{comment}</CommentsText>
          : <CommentForm onSubmit={editComment}>
              <Input
                type="text"
                name="commentText"
                defaultValue={comment}
                onChange={item => setInput(item)}
              />
              <Button type="submit">Edit</Button>
            </CommentForm>
      }

    </StyledComment>
  );
};

const StyledComment = styled.div`
  border-radius: ${PRIMARY.border};
  padding: 15px;
  background-color: ${COLORS.alabaster};
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CommentUserLogo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${COLORS.white};
  background-color: ${COLORS.amethyst};
`;

const CommentUserName = styled.p`
  overflow: hidden;
  display: -webkit-box;
  margin: 0 10px;
  width: 100%;
  font-size: 16px;
  color: ${COLORS.black};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const CommentsText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS.black};
`;

const CommentPopupMore = styled(PopupMore)`
  margin-left: auto;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export default Comment;
