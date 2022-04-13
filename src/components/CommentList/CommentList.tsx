import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { commentsInterface, usersInterface } from '../../types/interfaces';
import { Comment } from '../';

interface commentListInterface {
  comments: commentsInterface[];
};

const CommentList: FC<commentListInterface> = ({ comments }) => {
  return (
    <StyledCommentList>
      {
        comments.map(comment =>
          <CommentItem key={comment.id}>
            <Comment
              name={'Biba'}
              comment={comment.comment}
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
