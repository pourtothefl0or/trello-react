import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const Button = ({...props}: any) => {
  return (
    <StyledButton className={`${props.className} button-reset`}>{props.children}</StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 15px 25px;
  min-width: 180px;
  font-size: 16px;
  color: ${COLORS.white};
  background-color: ${COLORS.cornflowerBlue};
`;

export default Button;
