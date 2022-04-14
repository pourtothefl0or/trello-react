import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { usersInterface } from '../../../types/interfaces';
import { Container } from '../../../components';
import { Button, Input } from '../../../ui';
import { COLORS } from '../../../constants';

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

const StyledLogin = styled.section``;

const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const LoginTitle = styled.h2`
  margin: 0 0 20px;
  color: ${COLORS.black};
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
