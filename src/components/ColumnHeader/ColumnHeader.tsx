import React, { FC, useState } from 'react';
import { IColumn } from '../../types/interfaces';
import { ButtonClose, PopupMore } from '../../ui';
import { StyledColumnHeader, TitleInner, Title, CardsSum, ColumnForm, InputTitleLabel, InputTitle } from './styles';

interface ColumnProps {
  column: IColumn;
  onEditColumn: (values: IColumn) => void;
  cardsSum: number;
};

const ColumnHeader: FC<ColumnProps> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [editMode, handleEditMode] = useState(false);

  const editColumn: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputValue) {
      props.onEditColumn({
        id: props.column.id,
        column: inputValue
      });
    }

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
                defaultValue={props.column.column}
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
            <PopupMore onEditClick={() => handleEditMode(!editMode)} />
          </>
      }
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
