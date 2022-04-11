import React from 'react';
import styled from 'styled-components';
import { cardsInterface, commentsInterface } from '../../types/interfaces';
import { PRIMARY } from '../../constants';
import { Card } from '../';
import { CardAdd } from '../../ui';

const ColumnList = ({ cards, comments, cardClick, ...props }: any) => {
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
              editCardClick={props.editCardClick}
              deleteCardClick={props.deleteCardClick}
            />
          </ColumnItem>
        )
      }
      <ColumnItem>
        <CardAdd addCardClick={props.addCardClick} />
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
