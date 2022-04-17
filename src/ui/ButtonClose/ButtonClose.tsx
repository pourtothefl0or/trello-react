import React, { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from './styles';
import iconClose from '../../assets/images/icons/close.svg';

interface ButtonCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonClose: FC<ButtonCloseProps> = (props) => {
  return (
    <StyledButton
      className={props.className}
      {...props}
    >
      <img src={iconClose} alt="Button close" />
    </StyledButton>
  );
};

export default ButtonClose;
