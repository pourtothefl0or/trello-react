import React, { FC } from 'react';
import { cardInterface, commentInterface } from '../../types/interfaces';
import { Card } from '../';
import { CardAdd } from '../../ui';
import { StyledCardsList, CardsItem } from './styles';

interface ColumnListProps {
  columnId: number;
  comments: commentInterface[];
  cards: cardInterface[];
  onCardClick: (id: number) => void;
  onAddCard: () => void;
  onEditCard: (id: number) => void;
  onDeleteCard: (id: number) => void;
};

const ColumnsList: FC<ColumnListProps> = (props) => {
  return (
    <>
      <StyledCardsList>
        {
          props.cards.map((card: cardInterface) =>
            <CardsItem key={card.id}>
              <Card
                title={card.title}
                commentsSum={
                  props.comments
                    .filter((comment: commentInterface) => comment.cardId === card.id)
                    .length
                  || 0
                }
                cardClick={() => props.onCardClick(card.id)}
                onEditClick={() => props.onEditCard(card.id)}
                onDeleteClick={() => props.onDeleteCard(card.id)}
              />
            </CardsItem>
          )
        }
        <CardsItem>
          <CardAdd onClick={props.onAddCard} />
        </CardsItem>
      </StyledCardsList>
    </>
  );
};

export default ColumnsList;
