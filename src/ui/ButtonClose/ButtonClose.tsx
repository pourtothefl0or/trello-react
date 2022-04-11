import React from 'react';
import styled from 'styled-components';
import iconClose from '../../assets/images/icons/close.svg';

const ButtonClose = ({ ...props }: any) => {
  return (
    <StyledButton
      className={props.className}
      {...props}
    >
      <img src={iconClose} alt="Button close" />
    </StyledButton>
  );
};

const StyledButton = styled.button.attrs({
  className: 'button-reset'
})`
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ButtonClose;
