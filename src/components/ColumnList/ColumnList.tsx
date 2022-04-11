import React, { FC } from 'react';
import styled from 'styled-components';
import { cardsInterface, commentsInterface } from '../../types/interfaces';
import { PRIMARY } from '../../constants';
import { Card } from '../';
import { CardAdd } from '../../ui';

interface columnListInterface {
  cards: cardsInterface[];
  comments: commentsInterface[];
  cardClick: () => void;
  addCardClick: () => void;
  editCardClick: () => void;
  deleteCardClick: () => void;
};

const ColumnList: FC<columnListInterface> = ({
  cards,
  comments,
  cardClick,
  addCardClick,
  editCardClick,
  deleteCardClick
}) => {
  return (
    <StyledColumnList>
      {
        cards.map((card: cardsInterface) =>
          <ColumnItem key={card.id}>
            <Card
              title={card.title}
              description={card.description}
              commentsSum={
                comments
                  .filter((item: commentsInterface) => item.idCard === card.id)
                  .length
              }
              cardClick={cardClick}
              editCardClick={editCardClick}
              deleteCardClick={deleteCardClick}
            />
          </ColumnItem>
        )
      }
      <ColumnItem>
        <CardAdd addCardClick={addCardClick} />
      </ColumnItem>
    </StyledColumnList>
  );
};

const StyledColumnList = styled.ul``;

const ColumnItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${PRIMARY.indent};
  }
`;

export default ColumnList;
