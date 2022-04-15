import styled from 'styled-components';
import { COLORS } from '../../constants';
import { Button } from '../../ui/Button';

export const StyledCardsList = styled.ul``;

export const CardsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
