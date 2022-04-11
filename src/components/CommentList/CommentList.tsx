import React, { FC } from 'react';
import styled from 'styled-components';
import { commentsInterface, usersInterface } from '../../types/interfaces';
import { Comment } from '../';

interface commentListInterface {
  comments: commentsInterface[];
  users: usersInterface[];
};

const CommentList: FC<commentListInterface> = ({
  comments,
  users
}) => {
  return (
    <StyledCommentList>
      {
        comments.map(comment =>
          <CommentItem key={comment.id}>
            <Comment
              username={
                users.find(user => user.id === comment.idUser)?.name
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
