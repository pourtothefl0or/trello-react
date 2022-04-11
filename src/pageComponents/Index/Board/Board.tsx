import React, { useState } from 'react';
import styled from 'styled-components';
import { usersInterface, titlesInterface, cardsInterface, commentsInterface } from '../../../types/interfaces';
import { PRIMARY } from '../../../constants';
import { Container, Column, CommentList } from '../../../components';
import { Modal, Input, Textarea, Button } from '../../../ui';

const Board = () => {
  // arrays
  const [users, changeUsersState] = useState([
    {
      id: 1,
      name: 'Biba',
    },
    {
      id: 2,
      name: 'Ne Biba',
    },
  ]);

  const [titles, changeTitlesState] = useState([
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

  const [cards, changeCardsState] = useState([
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

  const [comments, changeCommentsState] = useState([
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
                addCardClick={() => toggleModalAddCard(!modalAddCard)}
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
              comments={comments.filter((comment: commentsInterface) => comment.idCard === 1)}
              users={users}
            />
          </Modal>
      }

      {
        modalAddCard &&
          <Modal
            title="Edit card"
            modalVisibility={modalAddCard}
            closeClick={() => toggleModalAddCard(!modalAddCard)}
          >
            <form onSubmit={() => {}}>
              <FormFields>
                <Input
                  type="text"
                  name=""
                  title="Title"
                  currentValue={() => {}}
                />
                <Textarea
                  name=""
                  title="Description"
                  currentValue={() => {}}
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
            <form onSubmit={() => {}}>
              <FormFields>
                <Input
                  type="text"
                  name=""
                  title="Title"
                  currentValue={() => {}}
                />
                <Textarea
                  name=""
                  title="Description"
                  currentValue={() => {}}
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
  height: 100vh;
`;

const BoardContainer = styled(Container)`
  display: flex;
  column-gap: ${PRIMARY.indent};
  padding-top: ${PRIMARY.containerIndent};
  padding-bottom: ${PRIMARY.containerIndent};
  height: 100%;
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

export default Board;
