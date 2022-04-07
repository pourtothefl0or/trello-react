import React from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

const Textarea = ({...props}: any) => {
  return (
    <StyledTextarea>
      <InputTitle>{props.title}</InputTitle>
      <InputField
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={e => props.currentValue(e.target.value)}
      />
    </StyledTextarea>
  );
};

const StyledTextarea = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
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
  min-height: 120px;
  resize: none;
`;

export default Textarea;
