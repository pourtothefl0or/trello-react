import React, { FC } from 'react';
import { StyledContainer } from './styles';

interface ContainerProps {
  className?: string;
  children: React.ReactChild | React.ReactNode;
}

const Container: FC<ContainerProps> = (props) => {
  return (
    <StyledContainer className={props.className}>{props.children}</StyledContainer>
  )
}

export default Container;
