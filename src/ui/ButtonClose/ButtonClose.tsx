import React, { FC } from 'react';
import styled from 'styled-components';
import iconClose from '../../assets/images/icons/close.svg';

interface buttonCloseInterface {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
};

const ButtonClose: FC<buttonCloseInterface> = (props) => {
  return (
    <StyledButton
      type={props.type}
      className={`${props.className} button-reset`}
      onClick={props.onClick}
    >
      <img src={iconClose} alt="Button close" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ButtonClose;
