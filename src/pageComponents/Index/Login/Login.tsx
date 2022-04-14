import React, { FC, useState } from 'react';
import { usersInterface } from '../../../types/interfaces';
import { Button, Input } from '../../../ui';
import { StyledLogin, LoginContainer, LoginTitle, LoginForm } from './styles';

interface loginInterface {
  onAddUser: (values: usersInterface) => void;
};

const Login: FC<loginInterface> = ({ onAddUser }) => {
  const [input, setInput] = useState('');

  const addUser = (event: any) => {
    event.preventDefault();

    onAddUser({
      id: Date.now(),
      name: input
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
            onChange={item => setInput(item)}
          />
          <Button type="submit">Enter</Button>
        </LoginForm>
      </LoginContainer>
    </StyledLogin>
  );
};

export default Login;
