import React, { FC, useState } from 'react';
import { usersInterface } from '../types/interfaces';
import { Board, Login } from '../pageComponents/Index';

const Index: FC = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')!) || []);

  const onAddUser = (values: usersInterface) => {
    const newArr = [...users, values];

    setUsers(newArr);
    localStorage.setItem('users', JSON.stringify(newArr));
  };

  return (
    <>
      {
        localStorage.users === undefined
          ? <Login onAddUser={onAddUser} />
          : <Board users={users} />
      }

    </>
  );
};

export default Index;
