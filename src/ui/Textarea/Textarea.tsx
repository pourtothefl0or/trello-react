import React from 'react';
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

const Textarea = ({...props}: any) => {
  return (
    <StyledTextarea>
      {
        props.title &&
          <InputTitle>{props.title}</InputTitle>
      }
      <InputField
        name={props.name}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={e => props.currentValue(e.target.value)}
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
