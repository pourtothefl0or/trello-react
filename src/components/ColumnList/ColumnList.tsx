import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cardsInterface, commentsInterface } from '../../types/interfaces';
import { ARRAYS, PRIMARY } from '../../constants';
import { Card, CommentList } from '../';
import { CardAdd, Modal, Input, Textarea, Button } from '../../ui';

interface columnListInterface {
  idTitle: number;
};

const ColumnList: FC<columnListInterface> = ({ idTitle }) => {
  const [cards, changeCardsArr] = useState(ARRAYS.cards);
  const [comments, changeCommentsArr] = useState(ARRAYS.comments);

  const [currentIdCard, getCurrentIdCard] = useState(0);

  // cards
  const [modalAddCard, toggleModalAddCard] = useState(false);
  const addCard = (item: any) => {
    item.preventDefault();

    const { cardTitle, cardDescription } = item.target.elements;
    changeCardsArr([
      ...cards,
      {
        id: ++cards.length,
        idTitle: 1,
        title: cardTitle.value,
        description: cardDescription.value
      }
    ]);

    toggleModalAddCard(!modalAddCard);
    item.target.reset();
  };

  // comments
  const [modalComments, toggleModalComments] = useState(false);
  const addComment = (item: any) => {
    item.preventDefault();

    const { commentDescription } = item.target.elements;
    changeCommentsArr([
      ...comments,
      {
        id: ++comments.length,
        idCard: currentIdCard,
        idUser: 1,
        comment: commentDescription.value
      }
    ]);

    item.target.reset();
  };

  return (
    <>
      <StyledColumnList>
        {
          cards
            .filter((card: cardsInterface) => card.idTitle === idTitle)
            .map((card: cardsInterface) =>
              <ColumnItem key={card.id}>
                <Card
                  title={card.title}
                  description={card.description}
                  commentsSum={
                    ARRAYS.comments
                      .filter((comment: commentsInterface) => comment.idCard === card.id)
                      .length
                  }
                  cardClick={() => {
                    getCurrentIdCard(card.id);
                    toggleModalComments(!modalComments);
                  }}
                  editClick={() => {}}
                  deleteClick={() => changeCardsArr(cards.filter((item: cardsInterface) => item.id !== card.id))}
                />
              </ColumnItem>
          )
        }
        <ColumnItem>
          <CardAdd onClick={() => toggleModalAddCard(!modalAddCard)} />
        </ColumnItem>
      </StyledColumnList>

      {
        modalAddCard &&
          <Modal
            title="Add card"
            modalVisibility={modalAddCard}
            closeClick={() => toggleModalAddCard(!modalAddCard)}
          >
            <CardForm onSubmit={e => addCard(e)}>
              <Input
                title="Title"
                type="text"
                name="cardTitle"
              />
              <Textarea
                title="Description"
                name="cardDescription"
              />
              <CardFormButton>Add</CardFormButton>
            </CardForm>
          </Modal>
      }

      {
        modalComments &&
          <Modal
            title="Comments"
            modalVisibility={modalComments}
            closeClick={() => toggleModalComments(!modalComments)}
          >
            <CommentList
              comments={comments.filter((filter: commentsInterface) => filter.idCard === currentIdCard)}
            />
            <CommentForm onSubmit={e => addComment(e)}>
              <Textarea
                name="commentDescription"
                placeholder="Add a comment..."
              />
              <Button>Add</Button>
            </CommentForm>
          </Modal>
      }
    </>
  );
};

const StyledColumnList = styled.ul``;

const ColumnItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${PRIMARY.indent};
  }
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const CardFormButton = styled(Button)`
  align-self: center;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: start;
  gap: ${PRIMARY.indent};

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default ColumnList;
