import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

interface inputInterface {
  title?: string;
  type: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  onChange: (item: string) => void;
};

const Input: FC<inputInterface> = ({
  title,
  type,
  name,
  defaultValue,
  placeholder,
  onChange
}) => {
  return (
    <StyledInput>
      {
        title &&
          <InputTitle>{title}</InputTitle>
      }
      <InputField
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </StyledInput>
  );
};

const StyledInput = styled.label`
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

const InputField = styled.input.attrs({
  minLenght: '1',
  required: true
})`
  border-radius: ${PRIMARY.border};
  border: 1px solid ${COLORS.topaz};
  padding: 10px 20px;
  width: 100%;
  min-height: 50px;
`;

export default Input;
