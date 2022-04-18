import React, { FC } from 'react';
import { PopupMoreItem } from '../../ui';
import { StyledCard, CardPopupMore, CardTitle, CardComments } from './styles';

interface CardProps {
  title: string;
  commentsSum: number;
  onCardClick: () => void;
  onEditClick: () => void;
  onDeleteComment: () => void;
}

const Card: FC<CardProps> = (props) => {
  return (
    <StyledCard onClick={props.onCardClick}>
      <CardPopupMore>
        <PopupMoreItem
          className="edit"
          onClick={props.onEditClick}
        >Edit</PopupMoreItem>
        <PopupMoreItem
          className="delete"
          onClick={props.onDeleteComment}
        >Delete</PopupMoreItem>
      </CardPopupMore>
      <CardTitle>{props.title}</CardTitle>
      <CardComments>{props.commentsSum} comments</CardComments>
    </StyledCard>
  )
}

export default Card;
