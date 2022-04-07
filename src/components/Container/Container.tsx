import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants';

const Container = ({...props}: any) => {
  return (
    <StyledContainer className={props.className}>{props.children}</StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${PRIMARY.indent};
  max-width: calc(${PRIMARY.maxWidth} + ${PRIMARY.indent} * 2);
`;

export default Container;
