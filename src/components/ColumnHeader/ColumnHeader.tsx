import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

interface columnHeader {
  title: string;
  cardsSum: number;
};

const ColumnHeader: FC<columnHeader> = ({ title, cardsSum }) => {
  return (
    <StyledColumnHeader>
      <ColumnHeaderTitle>{title}</ColumnHeaderTitle>
      <ColumnHeaderSum>{cardsSum}</ColumnHeaderSum>
    </StyledColumnHeader>
  );
};


const StyledColumnHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: ${PRIMARY.indent};
  padding: 20px 0;
  border-bottom: 2px solid ${COLORS.amethyst};
`;

const ColumnHeaderTitle = styled.h2`
  position: relative;
  margin: 0;
  padding-left: 18px;
  font-size: 18px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${COLORS.amethyst};
    transform: translateY(-50%);
  }
`;

const ColumnHeaderSum = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: ${COLORS.midGray};
  background-color: ${COLORS.alto};
`;

export default ColumnHeader;
