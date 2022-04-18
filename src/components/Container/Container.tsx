import React from 'react';
import { StyledContainer } from './styles';

interface ContainerProps {
  className?: string;
  children: React.ReactChild | React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <StyledContainer className={props.className}>{props.children}</StyledContainer>
  )
}

export default Container;
