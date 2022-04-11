import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { PopupMore, Textarea, Button } from '../../ui';

import { usersInterface } from '../../types/interfaces';

const Comment = ({...props}: any) => {
  const [editCommentsModalVisibility, handlerEditCommentsModalVisibility] = useState(false);
  const editCommentsModalVisibilityHandler = () => handlerEditCommentsModalVisibility(!editCommentsModalVisibility);

  return (
    <StyledComment>
      {
        props.users
          .filter((item: usersInterface) => item.id === props.commentIdUser)
          .map((name: usersInterface) =>
            <CommentHeader key={name.id}>
                <CommentUserLogo>{name.name.split('')[0]}</CommentUserLogo>
                <CommentUserName>{name.name}</CommentUserName>
                {
                  name.id === props.currentIdUser &&
                    <CommentPopupMore
                      editPopupClick={
                        () => {
                          editCommentsModalVisibilityHandler();
                          props.editPopupClick();
                        }
                      }
                      deletePopupClick={props.deletePopupClick}
                    />
                }
              </CommentHeader>
          )
          }
          {
          !editCommentsModalVisibility
            ? <CommentsText>{props.comment}</CommentsText>
            : <CommentsModalForm
                onSubmit={() => {}}
              >
                <Textarea
                  name=""
                  defaultValue={props.comment}
                  currentValue={props.comment}
                  placeholder="Edit a comment..."
                />
                <Button>Edit</Button>
            </CommentsModalForm>
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
  width: 30px;
  height: 30px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${COLORS.white};
  background-color: ${COLORS.amethyst};
`;

const CommentUserName = styled.p`
  margin: 0 10px;
  font-size: 16px;
  color: ${COLORS.black};
`;

const CommentsText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS.black};
`;

const CommentPopupMore = styled(PopupMore)`
  margin-left: auto;
`;

const CommentsModalForm = styled.form`
  display: flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Comment;
