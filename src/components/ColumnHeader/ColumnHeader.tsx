import React, { FC, useState } from 'react';
import { columnInterface } from '../../types/interfaces';
import { ButtonClose, PopupMore } from '../../ui';
import { StyledColumnHeader, TitleInner, Title, CardsSum, ColumnForm, InputTitleLabel, InputTitle } from './styles';

interface ColumnProps {
  column: columnInterface;
  onEditColumn: (values: columnInterface) => void;
  cardsSum: number;
};

const ColumnHeader: FC<ColumnProps> = (props) => {
  const [input, setInput] = useState('');
  const [editMode, handleEditMode] = useState(false);

  const editColumn = (event: any) => {
    event.preventDefault();

    if (input !== '') {
      props.onEditColumn({
        id: props.column.id,
        column: input
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
                onChange={item => setInput(item.target.value)}
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
