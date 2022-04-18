import React, { FC } from 'react';
import { ButtonClose } from '../ButtonClose';
import { ModalInner, StyledModal, ModalContainer, ModalButtons, ModalTitle } from './styles';

interface ModalProps {
  className?: string;
  title: string;
  modalVisibility: boolean;
  onCloseClick: () => void;
  children: React.ReactChild | React.ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  return (
    <ModalInner
      className={props.modalVisibility ? 'is-open' : ''}
      onClick={props.onCloseClick}
    >
      <StyledModal onClick={e => e.stopPropagation()}>
        <ModalContainer className={props.className}>
          <ModalButtons>
            <ButtonClose onClick={props.onCloseClick} />
          </ModalButtons>
          <ModalTitle>{props.title}</ModalTitle>
          {props.children}
        </ModalContainer>
      </StyledModal>
    </ModalInner>
  )
}

export default Modal;
