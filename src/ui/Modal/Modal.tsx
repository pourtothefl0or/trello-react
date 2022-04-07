import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { Container } from '../../components';
import { ButtonClose } from '../ButtonClose';

const Modal = ({...props}: any) => {
  return (
    <ModalInner
      className={props.modalState ? 'is-open' : ''}
      onClick={props.modalCloseClick}
    >
      <StyledModal onClick={e => e.stopPropagation()}>
        <ModalContainer className={props.className}>
          <ModalButtons>
            <ModalClose onClick={props.modalCloseClick}/>
          </ModalButtons>
          <ModalTitle>{props.title}</ModalTitle>
          {props.children}
        </ModalContainer>
      </StyledModal>
    </ModalInner>
  );
};

const ModalInner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: rgba(0,0,0, 0.8);
  opacity: 0;
  visibility: hidden;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`;

const StyledModal = styled.div`
  height: 100%;
  background-color: ${COLORS.white};

  @media (min-width: 600px) {
    border-top-left-radius: ${PRIMARY.border};
    border-bottom-left-radius: ${PRIMARY.border};
    min-width: 600px;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const ModalContainer = styled(Container)`
  overflow-y: auto;
  height: 100%;
  padding: 30px;
`;

const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: end;
  margin-bottom: 15px;
`;

const ModalClose = styled(ButtonClose)``;

const ModalTitle = styled.h2`
  margin: 0 0 30px;
  font-size: 36px;
`;

export default Modal;
