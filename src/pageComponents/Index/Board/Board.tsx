import React, { useState } from 'react';
import styled from 'styled-components';
import { usersInterface, titlesInterface, cardsInterface, commentsInterface } from '../../../types/interfaces';
import { PRIMARY } from '../../../constants';
import { Container, Column, CommentList } from '../../../components';
import { Modal, Input, Textarea, Button } from '../../../ui';

const Board = () => {
  // arrays
  const [users, changeUsersArr] = useState([
    {
      id: 1,
      name: 'Biba',
    },
    {
      id: 2,
      name: 'Ne Biba',
    },
  ]);

  const [titles, changeTitlesArr] = useState([
    {
      id: 1,
      idUser: 1,
      title: 'To Do'
    },
    {
      id: 2,
      idUser: 1,
      title: 'In progress'
    },
    {
      id: 3,
      idUser: 1,
      title: 'Testing'
    },
    {
      id: 4,
      idUser: 1,
      title: 'Done'
    },
  ]);

  const [cards, changeCardsArr] = useState([
    {
      id: 1,
      idTitle: 1,
      title: 'Brainstorming',
      description: 'Old fashioned recipe for preventing allergies and chemical sensitivities',
    },
    {
      id: 2,
      idTitle: 1,
      title: 'Brainstorming',
      description: 'Home business advertising ideas',
    },
    {
      id: 3,
      idTitle: 1,
      title: 'Brainstorming',
      description: 'Cosmetic surgery abroad making the right choice',
    },
    {
      id: 4,
      idTitle: 2,
      title: 'Brainstorming',
      description: 'Unmatched toner cartridge quality 20 less than oem price',
    },
    {
      id: 5,
      idTitle: 2,
      title: 'Brainstorming',
      description: 'How to look up',
    },
    {
      id: 6,
      idTitle: 3,
      title: 'Brainstorming',
      description: 'Types of paper in catalog printing',
    },
    {
      id: 7,
      idTitle: 3,
      title: 'Brainstorming',
      description: 'There is no competition',
    },
    {
      id: 8,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Linux or windows which is it',
    },
    {
      id: 9,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Be single minded',
    },
    {
      id: 10,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Linux or windows which is it',
    },
    {
      id: 11,
      idTitle: 4,
      title: 'Brainstorming',
      description: 'Dna the future of nutrition',
    },
  ]);

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

  // modals
  const [modalCard, toggleModalCard] = useState(false);
  const [modalAddCard, toggleModalAddCard] = useState(false);
  const [modalEditCard, toggleModalEditCard] = useState(false);

  // IDs
  const [idTitle, getIdTitle] = useState(titles[0].id);
  const [idCard, getIdCard] = useState(cards[0].id);

  // card functions
  const addCard = (item: any) => {
    item.preventDefault();

    const { cardTitle, cardDescription } = item.target.elements;
    changeCardsArr([
      ...cards,
      {
        id: ++cards.length,
        idTitle: idTitle,
        title: cardTitle.value,
        description: cardDescription.value,
      }
    ]);

    toggleModalAddCard(!modalAddCard);
    item.target.reset();
  };

  const editCard = (item: any) => {
    item.preventDefault();

    toggleModalEditCard(!modalEditCard);
    item.target.reset();
  };

  // comment functions
  const addComment = (item: any) => {
    item.preventDefault();

    const { commentText } = item.target.elements;
    changeCommentsArr([
      ...comments,
      {
        id: ++comments.length,
        idCard: idCard,
        idUser: 1,
        comment: commentText.value,
      }
    ]);

    item.target.reset();
  };

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            titles.map((column: titlesInterface) =>
              <Column
                key={column.id}
                title={column.title}
                cards={cards.filter((item: cardsInterface) => item.idTitle === column.id)}
                comments={comments}
                cardClick={() => toggleModalCard(!modalCard)}
                addCardClick={() => {
                  getIdTitle(column.id);
                  toggleModalAddCard(!modalAddCard);
                }}
                editCardClick={() => toggleModalEditCard(!modalEditCard)}
                deleteCardClick={() => {}}
              />
            )
          }
        </BoardContainer>
      </StyledBoard>

      {
        modalCard &&
          <Modal
            title="Card info"
            modalVisibility={modalCard}
            closeClick={() => toggleModalCard(!modalCard)}
          >
            <CommentList
              comments={comments.filter((comment: commentsInterface) => comment.idCard === idCard)}
              users={users}
            />
            <CommentForm onSubmit={e => addComment(e)}>
              <Textarea
                name="commentText"
                placeholder="Add a comment..."
              />
              <Button>Add</Button>
            </CommentForm>
          </Modal>
      }

      {
        modalAddCard &&
          <Modal
            title="Add card"
            modalVisibility={modalAddCard}
            closeClick={() => toggleModalAddCard(!modalAddCard)}
          >
            <form onSubmit={e => addCard(e)}>
              <FormFields>
                <Input
                  type="text"
                  name="cardTitle"
                  title="Title"
                />
                <Textarea
                  name="cardDescription"
                  title="Description"
                />
              </FormFields>
              <FormButton>Add</FormButton>
            </form>
          </Modal>
      }

      {
        modalEditCard &&
          <Modal
            title="Edit card"
            modalVisibility={modalEditCard}
            closeClick={() => toggleModalEditCard(!modalEditCard)}
          >
            <form onSubmit={e => editCard(e)}>
              <FormFields>
                <Input
                  type="text"
                  name=""
                  title="Title"
                  defaultValue=""
                />
                <Textarea
                  name=""
                  title="Description"
                  defaultValue=""
                />
              </FormFields>
              <FormButton>Add</FormButton>
            </form>
          </Modal>
      }
    </>
  );
};

const StyledBoard = styled.section`
  overflow-x: auto;
  width: 100%;
  height: 100%;
`;

const BoardContainer = styled(Container)`
  display: flex;
  column-gap: ${PRIMARY.indent};
  padding-top: ${PRIMARY.containerIndent};
  padding-bottom: ${PRIMARY.containerIndent};
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
`;

const FormButton = styled(Button)`
  display: block;
  margin: 0 auto;
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

export default Board;
