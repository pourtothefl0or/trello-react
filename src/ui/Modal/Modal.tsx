import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import { Container } from '../../components';
import { ButtonClose } from '../ButtonClose';

interface modalInterface {
  className?: string;
  title: string;
  modalVisibility: boolean;
  onCloseClick: () => void;
  children: React.ReactChild | React.ReactNode;
};

const Modal: FC<modalInterface> = ({ ...props }) => {
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
  transition: all ${PRIMARY.animation};
  transition-property: opacity, visibility;

  .modal {
    transform: translateX(100%);
    transition: all ${PRIMARY.animation};
    transition-property: transform;
  }

  &.is-open {
    opacity: 1;
    visibility: visible;

    .modal {
      transform: translateX(0);
    }
  }
`;

const StyledModal = styled.div.attrs({
  className: 'modal'
})`
  height: 100%;
  background-color: ${COLORS.white};

  @media (min-width: 600px) {
    border-top-left-radius: ${PRIMARY.border};
    border-bottom-left-radius: ${PRIMARY.border};
    width: 600px;
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

const ModalTitle = styled.h2`
  margin: 0 0 40px;
  font-size: 36px;
`;

export default Modal;
