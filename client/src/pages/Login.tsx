import React, { FC, useState } from 'react';
import LoginForm from '../components/auth/LoginFrom';

import { useAppSelector } from '../hook';
import LoginRegistration from '../components/auth/LoginRegistration';

import LoginAuthorized from '../components/auth/LoginAuthorized';

const Login: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <main className="container m-auto">
      {!isAuth ? <LoginRegistration /> : <LoginAuthorized />}
      <div></div>
    </main>
  );
};

export default Login;
