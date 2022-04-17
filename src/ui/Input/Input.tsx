import React, { FC } from 'react';
import { StyledInput, Title, Field } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input: FC<InputProps> = ({ title, ...props }) => {
  return (
    <StyledInput>
      {
        title &&
          <Title>{title}</Title>
      }
      <Field
        type={props.type}
        name={props.name}
        minLength={1}
        {...props}
      />
    </StyledInput>
  )
}

export default Input;
