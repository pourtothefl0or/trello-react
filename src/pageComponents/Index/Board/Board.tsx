import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, ColumnHeader, Card, Comment } from '../../../components';
import { COLORS, PRIMARY } from '../../../constants';
import { Button, CardAdd, Modal, Input, Textarea } from '../../../ui';

import { usersInterface, titlesInterface, cardsInterface, commentsInterface  } from '../../../types/interfaces';

const Board = () => {
  const currentUser = 1;

  const usersArr: usersInterface[] = [
    {
      id: 1,
      name: 'Biba',
    },
    {
      id: 2,
      name: 'Ne Biba',
    },
  ];

  const titlesArr: titlesInterface[] = [
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
  ];

  const cardsArr: cardsInterface[] = [
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
  ];

  const commentsArr: commentsInterface[] = [
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
  ];

  const [cards, changeCardsState] = useState(cardsArr);
  const [comments, changeCommentsState] = useState(commentsArr);

  // get current item id
  const [currentIdTitle, handlerCurrentIdTitle] = useState(1);
  const getIdTitle = (item: number) => handlerCurrentIdTitle(item);

  const [currentIdCard, handlerCurrentIdCard] = useState(1);
  const getIdCard = (item: number) => handlerCurrentIdCard(item);

  const [currentIdComment, handlerCurrentIdComment] = useState(1);
  const getIdComment = (item: number) => handlerCurrentIdComment(item);

  // fields values
  const [inputValue, getInputValue] = useState('');
  const inputValueCallback = (item: string) => getInputValue(item);

  const [textareaValue, getTextareaValue] = useState('');
  const textareaValueCallback = (item: string) => getTextareaValue(item);

  // add card functional
  const [addCardModalVisibility, handlerAddCardModalVisibility] = useState(false);
  const addCardModalHandler = () => handlerAddCardModalVisibility(!addCardModalVisibility);

  const addCardForm = (item: any) => {
    item.preventDefault();
    changeCardsState([
      ...cards,
      {
        id: ++cards.length,
        idTitle: currentIdTitle,
        title: inputValue,
        description: textareaValue
      }
    ]);
    addCardModalHandler();
    item.target.reset();
  };

  // edit card functional
  const [editCardModalVisibility, handlerEditCardModalVisibility] = useState(false);
  const editCardModalHandler = () => handlerEditCardModalVisibility(!editCardModalVisibility);

  const editCardForm = (item: any) => {
    item.preventDefault();
    const currentCard = cards.filter((item: cardsInterface) => item.id === currentIdCard)[0];
    [currentCard.title, currentCard.description] = [inputValue, textareaValue];
    editCardModalHandler();
    item.target.reset();
  };

  // add comments functional
  const [addCommentsModalVisibility, handlerAddCommentsModalVisibility] = useState(false);
  const addCommentsModalVisibilityHandler = () => handlerAddCommentsModalVisibility(!addCommentsModalVisibility);

  const addCommentForm = (item: any) => {
    item.preventDefault();
    changeCommentsState([
      ...comments,
      {
        id: ++comments.length,
        idCard: currentIdCard,
        idUser: currentUser,
        comment: textareaValue
      }
    ]);
    item.target.reset();
  };

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            titlesArr.map((column: titlesInterface) =>
              <Column key={column.id}>
                <ColumnHeader
                  title={column.title}
                  cardsSum={
                    cards
                      .filter(item => item.idTitle === column.id)
                      .length
                  }
                />
                <ColumnList>
                  {
                    cards
                      .filter((item: cardsInterface) => item.idTitle === column.id)
                      .map((card: cardsInterface) =>
                        <ColumnListItem key={card.id}>
                          <Card
                            title={card.title}
                            description={card.description}
                            commentsSum={
                              comments
                                .filter((item: commentsInterface) => item.idCard === card.id)
                                .length
                            }
                            editPopupClick={
                              () => {
                                editCardModalHandler();
                                getIdCard(card.id);
                              }
                            }
                            deletePopupClick={
                              () => changeCardsState(
                                cards.filter((item: cardsInterface) => item.id !== card.id)
                              )
                            }
                            commentsButtonClick={
                              () => {
                                addCommentsModalVisibilityHandler();
                                getIdCard(card.id);
                              }
                            }
                          />
                        </ColumnListItem>
                    )
                  }
                  <ColumnListItem>
                    <CardAdd
                      addCardClick={
                        () => {
                          addCardModalHandler();
                          getIdTitle(column.id);
                        }
                      }
                    />
                  </ColumnListItem>
                </ColumnList>
              </Column>
            )
          }
        </BoardContainer>
      </StyledBoard>

      {
        addCardModalVisibility === true &&
          <Modal
            title="Add Card"
            modalState={addCardModalVisibility}
            modalCloseClick={addCardModalHandler}
          >
            <ModalForm onSubmit={e => addCardForm(e)}>
              <FormFields>
                <Input
                  type="text"
                  name=""
                  title="Title"
                  currentValue={inputValueCallback}
                />
                <Textarea
                  name=""
                  title="Description"
                  currentValue={textareaValueCallback}
                />
              </FormFields>
              <FormButton>Add</FormButton>
            </ModalForm>
          </Modal>
      }
      {
        editCardModalVisibility === true &&
          <Modal
            title="Edit Card"
            modalState={editCardModalVisibility}
            modalCloseClick={editCardModalHandler}
          >
            <ModalForm onSubmit={e => editCardForm(e)}>
                {
                  cards
                    .filter((item: any) => item.id === currentIdCard)
                    .map(card =>
                      <FormFields key={card.id}>
                        <Input
                          type="text"
                          name=""
                          title="Title"
                          defaultValue={card.title}
                          currentValue={
                            inputValue === ''
                            ? getInputValue(card.title)
                            : inputValueCallback
                          }
                        />
                        <Textarea
                          name=""
                          title="Description"
                          defaultValue={card.description}
                          currentValue={
                            inputValue === ''
                            ? getTextareaValue(card.description)
                            : textareaValueCallback
                          }
                        />
                      </FormFields>
                  )
                }
              <FormButton>Edit</FormButton>
            </ModalForm>
          </Modal>
      }
      {
        addCommentsModalVisibility === true &&
          <Modal
            title="Comments"
            modalState={addCommentsModalVisibility}
            modalCloseClick={addCommentsModalVisibilityHandler}
          >
            <Comments>
              <CommentsList>
                {
                  comments
                    .filter((item: commentsInterface) => item.idCard === currentIdCard)
                    .map((comment: commentsInterface) =>
                      <CommentsListItem key={comment.id}>
                        <Comment
                          currentIdUser={currentUser}
                          users={usersArr}
                          commentIdUser={comment.idUser}
                          comment={comment.comment}
                          editPopupClick={() => {}}
                          deletePopupClick={
                            () => changeCommentsState(
                              comments.filter((item: commentsInterface) => item.id !== comment.id)
                            )
                          }
                        />
                      </CommentsListItem>
                    )
                }
              </CommentsList>
              <CommentsModalForm onSubmit={(e) => addCommentForm(e)}>
                <Textarea
                  name=""
                  currentValue={textareaValueCallback}
                  placeholder="Add a comment..."
                />
                <Button>Add</Button>
              </CommentsModalForm>
            </Comments>
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
`;

const Column = styled.div`
  flex: 0 0 ${PRIMARY.column};
  padding: 0 20px 20px;
  border-radius: ${PRIMARY.border};
  background-color: ${COLORS.white};

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

const ColumnList = styled.ul``;

const ColumnListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${PRIMARY.indent};
  }
`;

const ModalForm = styled.form``;

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

const Comments = styled.div``;

const CommentsList = styled.ul`
  margin-bottom: 30px;
`;

const CommentsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const CommentsModalForm = styled.form`
  display: flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Board;
