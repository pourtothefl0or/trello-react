import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { PopupMore } from '../../ui';
import iconComments from '../../assets/images/icons/comments.svg';

interface cardInterface {
  title: string;
  commentsSum: number;
  cardClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

const Card: FC<cardInterface> = ({
  title,
  commentsSum,
  cardClick,
  onEditClick,
  onDeleteClick
}) => {
  return (
    <StyledCard onClick={cardClick}>
      <CardPopupMore
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
      <CardText>
        <CardTitle>{title}</CardTitle>
      </CardText>
      <CardComments>{commentsSum} comments</CardComments>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${PRIMARY.border};
  padding: 40px 20px 20px;
  background-color: ${COLORS.alabaster};
  cursor: pointer;
`;

const CardPopupMore = styled(PopupMore)`
  position: absolute;
  top: 15px;
  right: 20px;
`;

const CardText = styled.div`
  margin-bottom: 25px;
`;

const CardTitle = styled.h2`
  overflow: hidden;
  display: -webkit-box;
  margin: 0;
  width: 100%;
  font-size: 16px;
  color: ${COLORS.black};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const CardComments = styled.div`
  align-self: end;
  margin: 0;
  padding-left: 20px;
  font-size: 12px;
  color: ${COLORS.topaz};
  background-image: url(${iconComments});
  background-size: 15px 15px;
  background-position: left center;
  background-repeat: no-repeat;
`;

export default Card;
