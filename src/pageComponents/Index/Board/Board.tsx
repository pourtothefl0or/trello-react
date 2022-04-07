import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, ColumnHeader, Card } from '../../../components';
import { COLORS, PRIMARY } from '../../../constants';
import { Button, CardAdd, Modal, Input, Textarea } from '../../../ui';

interface titlesInterface {
  id: number,
  title: string
};

interface cardsInterface {
  id: number,
  idTitle: number
  title: string
  description: string
};

interface commentsInterface {
  id: number,
  idCard: number,
  comment: string
};

const Board = () => {
  const titlesArr: titlesInterface[] = [
    {
      id: 1,
      title: 'To Do'
    },
    {
      id: 2,
      title: 'In progress'
    },
    {
      id: 3,
      title: 'Testing'
    },
    {
      id: 4,
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
      comment: 'Hello',
    },
    {
      id: 2,
      idCard: 1,
      comment: 'Hello',
    },
    {
      id: 3,
      idCard: 2,
      comment: 'Hello',
    },
    {
      id: 4,
      idCard: 2,
      comment: 'Hello',
    },
    {
      id: 5,
      idCard: 2,
      comment: 'Hello',
    },
  ];

  const [cards, changeCardsState] = useState(cardsArr);

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
        idTitle: 1,
        title: inputValue,
        description: textareaValue
      }
    ]);
    addCardModalHandler();
    item.target.reset();
  };

  const [editCardModalVisibility, handlerEditCardModalVisibility] = useState(false);
  const editCardModalHandler = () => handlerEditCardModalVisibility(!editCardModalVisibility);

  const [currentIdCard, handlerCurrentIdCard] = useState('');
  const getCardId = (item: any) => handlerCurrentIdCard(item);

  const editCardForm = (item: any) => {
    item.preventDefault();
    const currentCard = cards.filter((item: any) => item.id === currentIdCard)[0];
    [currentCard.title, currentCard.description] = [inputValue, textareaValue];
    editCardModalHandler();
    item.target.reset();
  };

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
                                getCardId(card.id);
                              }
                            }
                            deletePopupClick={
                              () => changeCardsState(
                                cards.filter((item: any) => item.id !== card.id)
                              )
                            }
                          />
                        </ColumnListItem>
                    )
                  }
                  <ColumnListItem>
                    <CardAdd addCardClick={addCardModalHandler}/>
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

export default Board;
