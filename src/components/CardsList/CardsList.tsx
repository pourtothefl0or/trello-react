import React, { FC } from 'react';
import { ICard, IComment } from '../../types/interfaces';
import { CardFunctions } from '../../types/functions';
import { Card } from '../';
import { CardAdd } from '../../ui';
import { CardsItem } from './styles';

interface ColumnListProps extends CardFunctions {
  comments: IComment[];
  cards: ICard[];
}

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
                onCardClick={() => props.onCardClick(card.id)}
                onEditClick={() => props.onEditCard(card.id)}
                onDeleteComment={() => props.onDeleteCard(card.id)}
              />
            </CardsItem>
          )
        }
        <CardsItem>
          <CardAdd onClick={props.onAddCard} />
        </CardsItem>
      </ul>
    </>
  )
}

export default ColumnsList;
