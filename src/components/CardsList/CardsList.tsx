import React, { FC } from 'react';
import { ICard, IComment } from '../../types/interfaces';
import { Card } from '../';
import { CardAdd } from '../../ui';
import { CardsItem } from './styles';

interface ColumnListProps {
  columnId: number;
  comments: IComment[];
  cards: ICard[];
  onCardClick: (id: number) => void;
  onAddCard: () => void;
  onEditCard: (id: number) => void;
  onDeleteCard: (id: number) => void;
};

const ColumnsList: FC<ColumnListProps> = (props) => {
  return (
    <>
      <ul>
        {
          props.cards.map((card: ICard) =>
            <CardsItem key={card.id}>
              <Card
                title={card.title}
                commentsSum={
                  props.comments
                    .filter((comment: IComment) => comment.cardId === card.id)
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
      </ul>
    </>
  );
};

export default ColumnsList;
