import React, { ButtonHTMLAttributes, FC } from 'react';
import { StyledCardAdd } from './styles';

interface CardAddProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // className?: string;
};

const CardAdd: FC<CardAddProps> = (props) => {
  return (
    <StyledCardAdd
      className={props.className}
      {...props}
    >
      + Add new card
    </StyledCardAdd>
  );
};

export default CardAdd;
