import React, { FC, useState } from 'react';
import { Button, Input } from '../../../ui';
import { LoginContainer, LoginTitle, LoginForm } from './styles';

interface LoginProps {
  onAddUser: (name: string) => void;
}

const Login: FC<LoginProps> = ({ onAddUser }) => {
  const [inputValue, setInputValue] = useState('');

  const addUser: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputValue) {
      onAddUser(inputValue);
    }
  }

  return (
    <section>
      <LoginContainer>
        <LoginTitle>TRELLO</LoginTitle>
        <LoginForm onSubmit={addUser}>
          <Input
            type="text"
            name="username"
            placeholder="Write your name..."
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            required
          />
          <Button type="submit">Enter</Button>
        </LoginForm>
      </LoginContainer>
    </section>
  )
}

export default Login;
