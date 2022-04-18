import React, { FC, useState } from 'react';
import { IUser } from '../types/interfaces';
import { Board, Login } from '../pageComponents/Index';

const Index: FC = () => {
  const [user, setUser] = useState<IUser>(JSON.parse(localStorage.getItem('user')!) || {});

  const onAddUser = (name: string) => {
    const newUser: IUser = { id: 1, name: name };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  return (
    <>
      {
        localStorage.user === undefined
          ? <Login onAddUser={onAddUser} />
          : <Board user={user} />
      }

    </>
  )
}

export default Index;
