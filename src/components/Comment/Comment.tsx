import React from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { PopupMore } from '../../ui';

const Comment = ({ username, comments }: any) => {
  return (
    <StyledComment>
      <CommentHeader>
        <CommentUserLogo>{username.split('')[0]}</CommentUserLogo>
        <CommentUserName>{username}</CommentUserName>
        <CommentPopupMore />
      </CommentHeader>
      <CommentsText>{comments}</CommentsText>
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

export default Comment;
