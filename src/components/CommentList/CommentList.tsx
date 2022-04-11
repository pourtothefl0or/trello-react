import React from 'react';
import styled from 'styled-components';
import { Comment } from '../';

const CommentList = ({ comments }: any) => {
  return (
    <StyledCommentList>
      {
        comments.map((comment: any) =>
          <CommentItem key={comment.id}>
            <Comment
              username="Biba"
              comments={comment.comment}
            />
        </CommentItem>
        )
      }
    </StyledCommentList>
  );
};

const StyledCommentList = styled.ul``;

const CommentItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default CommentList;
