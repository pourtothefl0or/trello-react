import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { columnsInterface } from '../../types/interfaces';
import { ButtonClose, PopupMore } from '../../ui';

interface columnHeader {
  title: string;
  cardsSum: number;
  onEditColumn: (values: columnsInterface) => void;
};

const ColumnHeader: FC<columnHeader> = ({ title, cardsSum, onEditColumn }) => {
  const [editMode, toggleEditMode] = useState(false);

  const [input, setInput] = useState('');

  const editColumn = (event: any) => {
    event.preventDefault();

    onEditColumn({
      id: 1,
      title: input
    });

    toggleEditMode(!editMode);
    event.target.reset();
  };

  return (
    <StyledColumnHeader>
      {
        !editMode
          ?
          <>
            <ColumnHeaderTitleInner>
              <ColumnHeaderTitle>{title}</ColumnHeaderTitle>
            </ColumnHeaderTitleInner>
            <ColumnHeaderSum>{cardsSum}</ColumnHeaderSum>
            <PopupMore onEditClick={() => toggleEditMode(!editMode)} />
          </>
          :
          <>
            <ColumnHeaderForm onSubmit={editColumn}>
              <ColumnHeaderLabel>
                <ColumnHeaderInput
                  type="text"
                  name="columnTitle"
                  defaultValue={title}
                  onChange={item => setInput(item.target.value)}
                />
              </ColumnHeaderLabel>
              <ButtonClose type="submit" />
            </ColumnHeaderForm>
          </>
      }
    </StyledColumnHeader>
  );
};


const StyledColumnHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${COLORS.amethyst};
`;

const ColumnHeaderTitleInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
`;

const ColumnHeaderTitle = styled.h2`
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  margin: 0;
  padding-left: 18px;
  width: 100%;
  font-size: 18px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${COLORS.amethyst};
    transform: translateY(-50%);
  }
`;

const ColumnHeaderSum = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 100%;
  min-width: 20px;
  max-width: 20px;
  height: 20px;
  font-size: 12px;
  color: ${COLORS.midGray};
  background-color: ${COLORS.alto};
`;

const ColumnHeaderForm = styled.form`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 100%;
`;

const ColumnHeaderLabel = styled.label`
  position: relative;
  display: block;
  padding-left: 18px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${COLORS.amethyst};
    transform: translateY(-50%);
  }
`;

const ColumnHeaderInput = styled.input`
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
`;

export default ColumnHeader;
