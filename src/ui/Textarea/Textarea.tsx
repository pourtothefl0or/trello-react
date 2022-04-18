import React, { FC } from 'react';
import { StyledTextarea, Title, Field } from './styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
}

const Textarea: FC<TextareaProps> = ({ title, ...props }) => {
  return (
    <StyledTextarea>
      {
        title &&
          <Title>{title}</Title>
      }
      <Field
        name={props.name}
        minLength={1}
        {...props}
      />
    </StyledTextarea>
  )
}

export default Textarea;
