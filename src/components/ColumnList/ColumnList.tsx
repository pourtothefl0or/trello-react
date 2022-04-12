import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { usersInterface, cardsInterface, commentsInterface } from '../../types/interfaces';
import { PRIMARY } from '../../constants';
import { Card, CommentList } from '../';
import { CardAdd, Modal, Textarea, Button } from '../../ui';

interface columnListInterface {
  cards: cardsInterface[];
  users: usersInterface[];
  cardAddClick: () => void;
};

const ColumnList: FC<columnListInterface> = ({ cards, users, cardAddClick }) => {
  const [comments, changeCommentsArr] = useState([
    {
      id: 1,
      idCard: 1,
      idUser: 1,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      idCard: 1,
      idUser: 1,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum.',
    },
    {
      id: 3,
      idCard: 1,
      idUser: 2,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum. Est facere nam repudiandae culpa consectetur alias iste ut consequatur unde tenetur?',
    },
  ]);

  const [modalComments, toggleModalComments] = useState(false);
  const [idCard, getIdCard] = useState(cards[0].id);

  const addComment = (item: any) => {
    item.preventDefault();

    const { commentDescription } = item.target.elements;
    changeCommentsArr([
      ...comments,
      {
        id: ++comments.length,
        idCard: idCard,
        idUser: users[0].id,
        comment: commentDescription.value
      }
    ]);

    item.target.reset();
  };

  return (
    <>
      <StyledColumnList>
        {
          cards.map((card: cardsInterface) =>
            <ColumnItem key={card.id}>
              <Card
                title={card.title}
                description={card.description}
                commentsSum={
                  comments
                    .filter((comment: commentsInterface) => comment.idCard === card.id)
                    .length
                }
                cardClick={() => {
                  toggleModalComments(!modalComments);
                  getIdCard(card.id);
                }}
              />
            </ColumnItem>
          )
        }
        <ColumnItem>
          <CardAdd onClick={cardAddClick} />
        </ColumnItem>
      </StyledColumnList>

      {
        modalComments &&
          <Modal
            title="Comments"
            modalVisibility={modalComments}
            closeClick={() => toggleModalComments(!modalComments)}
          >
            <CommentList
              comments={comments.filter((filter: commentsInterface) => filter.idCard === idCard)}
              users={users}
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
