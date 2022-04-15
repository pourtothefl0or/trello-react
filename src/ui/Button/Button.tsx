import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

interface buttonInterface {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  children: React.ReactChild | React.ReactNode;
};

const Button: FC<buttonInterface> = (props) => {
  return (
    <StyledButton
      type={props.type}
      className={`${props.className} button-reset`}
    >
      {props.children}
    </StyledButton>
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
