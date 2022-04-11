import React from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

const CardAdd = ({ addCardClick }: any) => {
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
