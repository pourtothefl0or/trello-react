import React, { FC, useState } from 'react';
import { ColumnFunctions } from '../../types/functions';
import { IColumn } from '../../types/interfaces';
import { ButtonClose, PopupMore, PopupMoreItem } from '../../ui';
import { StyledColumnHeader, TitleInner, Title, CardsSum, ColumnForm, InputTitleLabel, InputTitle } from './styles';

interface ColumnProps extends ColumnFunctions {
  column: IColumn;
  cardsSum: number;
}

const ColumnHeader: FC<ColumnProps> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [editMode, handleEditMode] = useState(false);

  const editColumn: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputValue) props.onEditColumn({ id: props.column.id, column: inputValue });

    handleEditMode(!editMode);
  };

  return (
    <StyledColumnHeader>
      {
        editMode
          ?
          <ColumnForm onSubmit={editColumn}>
            <InputTitleLabel>
              <InputTitle
                type="text"
                name="columnTitle"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                required
              />
            </InputTitleLabel>
            <ButtonClose type="submit" />
          </ColumnForm>
          :
          <>
            <TitleInner>
              <Title>{props.column.column}</Title>
            </TitleInner>
            <CardsSum>{props.cardsSum}</CardsSum>
            <PopupMore>
              <PopupMoreItem
                className="edit"
                onClick={() => {
                  setInputValue(props.column.column);
                  handleEditMode(!editMode)}
                }
              >Edit</PopupMoreItem>
            </PopupMore>
          </>
      }
    </StyledColumnHeader>
  )
}

export default ColumnHeader;
