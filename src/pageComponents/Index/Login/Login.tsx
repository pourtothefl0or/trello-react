import React, { FC, useState } from 'react';
import { userInterface } from '../../../types/interfaces';
import { Button, Input } from '../../../ui';
import { StyledLogin, LoginContainer, LoginTitle, LoginForm } from './styles';

interface LoginProps {
  onAddUser: (values: userInterface) => void;
};

const Login: FC<LoginProps> = ({ onAddUser }) => {
  const [inputValue, handleInputValue] = useState('');

  const addUser = (event: any) => {
    event.preventDefault();

    onAddUser({
      id: Date.now(),
      name: inputValue
    });
  };

  return (
    <StyledLogin>
      <LoginContainer>
        <LoginTitle>TRELLO</LoginTitle>
        <LoginForm onSubmit={addUser}>
          <Input
            type="text"
            name="username"
            placeholder="Write your name..."
            onChange={item => handleInputValue(item)}
          />
          <Button type="submit">Enter</Button>
        </LoginForm>
      </LoginContainer>
    </StyledLogin>
  );
};

export default Login;
