import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, ColumnHeader, Card } from '../../../components';
import { COLORS, PRIMARY } from '../../../constants';
import { Button, CardAdd, Modal, Input, Textarea } from '../../../ui';

interface usersInterface {
  id: number,
  name: string
};

interface titlesInterface {
  id: number,
  idUser: number,
  title: string
};

interface cardsInterface {
  id: number,
  idTitle: number,
  title: string,
  description: string
};

interface commentsInterface {
  id: number,
  idCard: number,
  idUser: number,
  comment: string
};

const Board = () => {
  const usersArr: usersInterface[] = [
    {
      id: 1,
      name: 'Biba',
    },
    {
      id: 2,
      name: 'Abib',
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
      idUser: 1,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum. Est facere nam repudiandae culpa consectetur alias iste ut consequatur unde tenetur?',
    },
    {
      id: 4,
      idCard: 2,
      idUser: 1,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 5,
      idCard: 2,
      idUser: 2,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum.',
    },
    {
      id: 6,
      idCard: 2,
      idUser: 2,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum. Est facere nam repudiandae culpa consectetur alias iste ut consequatur unde tenetur?',
    },
  ];

  const [cards, changeCardsState] = useState(cardsArr);

  const [currentIdTitle, handlerCurrentIdTitle] = useState(0);
  const getIdTitle = (item: number) => handlerCurrentIdTitle(item);

  const [currentIdCard, handlerCurrentIdCard] = useState(0);
  const getIdCard = (item: number) => handlerCurrentIdCard(item);

  const [inputValue, getInputValue] = useState('');
  const inputValueCallback = (item: string) => getInputValue(item);

  const [textareaValue, getTextareaValue] = useState('');
  const textareaValueCallback = (item: string) => getTextareaValue(item);

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

  const [editCardModalVisibility, handlerEditCardModalVisibility] = useState(false);
  const editCardModalHandler = () => handlerEditCardModalVisibility(!editCardModalVisibility);

  const editCardForm = (item: any) => {
    item.preventDefault();
    const currentCard = cards.filter((item: any) => item.id === currentIdCard)[0];
    [currentCard.title, currentCard.description] = [inputValue, textareaValue];
    editCardModalHandler();
    item.target.reset();
  };

  const [commentsModalVisibility, handlerCommentsModalVisibility] = useState(false);
  const commentsModalVisibilityHandler = () => handlerCommentsModalVisibility(!commentsModalVisibility);

  return (
    <>
      <StyledBoard>
        <BoardContainer>
          {
            titlesArr.map(column =>
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
                      .filter((item: any) => item.idTitle === column.id)
                      .map((card: any) =>
                        <ColumnListItem key={card.id}>
                          <Card
                            title={card.title}
                            description={card.description}
                            commentsSum={
                              commentsArr
                                .filter((item: any) => item.idCard === card.id)
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
                                cards.filter((item: any) => item.id !== card.id)
                              )
                            }
                            commentsButtonClick={
                              () => {
                                commentsModalVisibilityHandler();
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

      <Modal
        title="Add Card"
        modalState={addCardModalVisibility}
        modalCloseClick={addCardModalHandler}
      >
        <ModalForm action="" onSubmit={e => addCardForm(e)}>
          <FormFields>
            <Input
              type="text"
              name="cardTitle"
              title="Title"
              defaultValue=""
              currentValue={inputValueCallback}
            />
            <Textarea
              name="cardDescription"
              title="Description"
              defaultValue=""
              currentValue={textareaValueCallback}
            />
          </FormFields>
          <FormButton>Add</FormButton>
        </ModalForm>
      </Modal>

      <Modal
        title="Edit Card"
        modalState={editCardModalVisibility}
        modalCloseClick={editCardModalHandler}
      >
        <ModalForm action="" onSubmit={e => editCardForm(e)}>
            {
              cards
                .filter((item: any) => item.id === currentIdCard)
                .map(card =>
                  <FormFields key={card.id}>
                    <Input
                      type="text"
                      name="cardTitle"
                      title="Title"
                      defaultValue={card.title}
                      currentValue={
                        inputValue === ''
                        ? getInputValue(card.title)
                        : inputValueCallback
                      }
                    />
                    <Textarea
                      name="cardDescription"
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

      <Modal
        title="Comments"
        modalState={commentsModalVisibility}
        modalCloseClick={commentsModalVisibilityHandler}
      >
        <CommentsList>
          {
            commentsArr
              .filter((item: any) => item.idCard === currentIdCard)
              .map((comment: any) =>
                <CommentsListItem key={comment.id}>
                  <Comment>
                    {
                      usersArr
                        .filter((item: any) => item.id === comment.idUser)
                        .map((name: any) =>
                          <CommentHeader key={name.id}>
                            <CommentUserLogo>{name.name.split('')[0]}</CommentUserLogo>
                            <CommentUserName>{name.name}</CommentUserName>
                          </CommentHeader>
                      )
                    }
                    <CommentsText>{comment.comment}</CommentsText>
                  </Comment>
                </CommentsListItem>
              )
          }
        </CommentsList>
      </Modal>
    </>
  );
};

const Comment = styled.div`
  border-radius: ${PRIMARY.border};
  padding: 15px;
  background-color: ${COLORS.alabaster};
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CommentUserLogo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${COLORS.white};
  background-color: ${COLORS.amethyst};
`;

const CommentUserName = styled.p`
  margin: 0 0 0 10px;
  font-size: 16px;
  color: ${COLORS.black};
`;

const CommentsText = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${COLORS.black};
`;

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

const CommentsList = styled.ul``;

const CommentsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default Board;
