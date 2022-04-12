import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { PopupMore } from '../../ui';
import iconComments from '../../assets/images/icons/comments.svg';

interface cardInterface {
  title: string;
  description: string;
  commentsSum: number;
  cardClick: () => void;
};

const Card: FC<cardInterface> = ({ title, description, commentsSum, cardClick }) => {
  return (
    <StyledCard onClick={cardClick}>
      <CardPopupMore
        editClick={() => {}}
        deleteClick={() => {}}
      />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardDescr>{description}</CardDescr>
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
  padding: 35px 15px 25px;
  background-color: ${COLORS.alabaster};
  cursor: pointer;
`;

const CardPopupMore = styled(PopupMore)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const CardText = styled.div`
  margin-bottom: 25px;
`;

const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 16px;
  color: ${COLORS.black};
`;

const CardDescr = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS.topaz};
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
