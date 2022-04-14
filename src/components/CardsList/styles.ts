import styled from 'styled-components';
import { COLORS } from '../../constants';
import { Button } from '../../ui/Button';

export const StyledCardsList = styled.ul``;

export const CardsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const CardFormButton = styled(Button)`
  align-self: center;
`;

export const CardInfo = styled.div`
  margin-bottom: 40px;
`;

export const CardInfoTitle = styled.h3`
  margin: 0 0 20px;
  color: ${COLORS.black};
`;

export const CardInfoDescription = styled.p`
  margin: 0;
  color: ${COLORS.black};
`;
