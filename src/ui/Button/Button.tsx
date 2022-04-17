import React, { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      className={props.className}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
