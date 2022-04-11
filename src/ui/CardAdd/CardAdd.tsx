import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

interface cardAddInterface {
  addCardClick: () => void;
};

const CardAdd: FC<cardAddInterface> = ({ addCardClick }) => {
  return (
    <StyledCardAdd onClick={addCardClick}>+ Add new card</StyledCardAdd>
  );
};

const StyledCardAdd = styled.button.attrs({
  className: 'button-reset'
})`
  margin: 0;
  border: 1px dashed ${COLORS.topaz};
  border-radius: ${PRIMARY.border};
  padding: 10px;
  width: 100%;
  font-size: 14px;
  color: ${COLORS.topaz};
`;

export default CardAdd;
