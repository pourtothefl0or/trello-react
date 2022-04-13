import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { usersInterface } from '../../../types/interfaces';
import { Container } from '../../../components';
import { Button, Input } from '../../../ui';

interface loginInterface {
  onAddUser: (values: usersInterface) => void;
};

const Login: FC<loginInterface> = ({ onAddUser }) => {
  const [input, setInput] = useState('');

  const addUser = (item: any) => {
    item.preventDefault();

    onAddUser({
      id: Date.now(),
      name: input
    });
  };

  return (
    <StyledLogin>
      <LoginContainer>
        <LoginForm onSubmit={addUser}>
          <Input
            type="text"
            name="username"
            placeholder="Write your name..."
            onChange={item => setInput(item)}
          />
          <Button>Enter</Button>
        </LoginForm>
      </LoginContainer>
    </StyledLogin>
  );
};

const StyledLogin = styled.section``;

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: inline-flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Login;
