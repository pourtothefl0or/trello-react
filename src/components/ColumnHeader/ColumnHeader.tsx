import React, { FC, useState } from 'react';
import { columnsInterface } from '../../types/interfaces';
import { ButtonClose, PopupMore } from '../../ui';
import { StyledColumnHeader, TitleInner, Title, CardsSum, ColumnForm, InputTitleLabel, InputTitle } from './styles';

interface columnHeader {
  column: columnsInterface;
  cardsSum: number;
  onEditColumn: (values: columnsInterface) => void;
};

const ColumnHeader: FC<columnHeader> = ({ ...props }) => {
  const [editMode, toggleEditMode] = useState(false);

  const [input, setInput] = useState('');

  const editColumn = (event: any) => {
    event.preventDefault();

    props.onEditColumn({
      id: props.column.id,
      column: input
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
            <TitleInner>
              <Title>{props.column.column}</Title>
            </TitleInner>
            <CardsSum>{props.cardsSum}</CardsSum>
            <PopupMore onEditClick={() => toggleEditMode(!editMode)} />
          </>
          :
          <>
            <ColumnForm onSubmit={editColumn}>
              <InputTitleLabel>
                <InputTitle
                  type="text"
                  name="columnTitle"
                  defaultValue={props.column.column}
                  onChange={item => setInput(item.target.value)}
                />
              </InputTitleLabel>
              <ButtonClose type="submit" />
            </ColumnForm>
          </>
      }
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
