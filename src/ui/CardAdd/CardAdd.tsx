import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

interface cardAddInterface {
  onClick: () => void;
};

const CardAdd: FC<cardAddInterface> = ({ onClick }) => {
  return (
    <StyledCardAdd onClick={onClick}>+ Add new card</StyledCardAdd>
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
