import React, { FC } from 'react';
import { StyledCard, CardPopupMore, CardTitle, CardComments } from './styles';

interface CardProps {
  title: string;
  commentsSum: number;
  cardClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

const Card: FC<CardProps> = (props) => {
  return (
    <StyledCard onClick={props.cardClick}>
      <CardPopupMore
        onEditClick={props.onEditClick}
        onDeleteClick={props.onDeleteClick}
      />
      <CardTitle>{props.title}</CardTitle>
      <CardComments>{props.commentsSum} comments</CardComments>
    </StyledCard>
  );
};

export default Card;
