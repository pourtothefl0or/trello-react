import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

interface textareaInterface {
  title?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
};

const Textarea: FC<textareaInterface> = ({
  title,
  name,
  defaultValue,
  placeholder

}) => {
  return (
    <StyledTextarea>
      {
        title &&
          <InputTitle>{title}</InputTitle>
      }
      <InputField
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </StyledTextarea>
  );
};

const StyledTextarea = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
`;

const InputTitle = styled.span`
  margin: 0;
  font-size: 16px;
  color: ${COLORS.black};
`;

const InputField = styled.textarea.attrs({
  minLenght: '1',
  required: true
})`
  border-radius: ${PRIMARY.border};
  border: 1px solid ${COLORS.topaz};
  padding: 20px;
  width: 100%;
  min-height: 100px;
  resize: none;
`;

export default Textarea;
