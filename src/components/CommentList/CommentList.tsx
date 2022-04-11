import React from 'react';
import styled from 'styled-components';
import { usersInterface, commentsInterface } from '../../types/interfaces';
import { Comment } from '../';

const CommentList = ({ comments, users }: any) => {
  return (
    <StyledCommentList>
      {
        comments.map((comment: commentsInterface) =>
          <CommentItem key={comment.id}>
            <Comment
              username={
                users
                  .find((user: usersInterface) => user.id === comment.idUser)
                  .name
              }
              comments={comment.comment}
            />
        </CommentItem>
        )
      }
    </StyledCommentList>
  );
};

const StyledCommentList = styled.ul`
  margin-bottom: 40px;
`;

const CommentItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default CommentList;
