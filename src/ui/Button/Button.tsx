import React from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

const Button = ({ children, ...props }: any) => {
  return (
    <StyledButton className={`${props.className} button-reset`}>{children}</StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: ${PRIMARY.border};
  padding: 10px 20px;
  min-width: 125px;
  min-height: 50px;
  font-size: 16px;
  color: ${COLORS.white};
  background-color: ${COLORS.cornflowerBlue};
`;

export default Button;
