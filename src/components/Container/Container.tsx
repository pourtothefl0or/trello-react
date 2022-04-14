import React, { FC } from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants';

interface ContainerProps {
  className?: string;
  children: React.ReactChild | React.ReactNode;
};

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <StyledContainer className={className}>{children}</StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: calc(${PRIMARY.maxWidth} + 20px * 2);
`;

export default Container;
