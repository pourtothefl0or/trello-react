import React, { FC, useState } from 'react';
import { userInterface } from '../types/interfaces';
import { Board, Login } from '../pageComponents/Index';

const Index: FC = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')!) || {});

  const onAddUser = (values: userInterface) => {
    setUser(values);
    localStorage.setItem('user', JSON.stringify(values));
  };

  return (
    <>
      {
        localStorage.user === undefined
          ? <Login onAddUser={onAddUser} />
          : <Board user={user} />
      }

    </>
  );
};

export default Index;
