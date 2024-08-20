import React, { FC, useState } from 'react';
import LoginForm from '../components/auth/LoginFrom';

import { useAppSelector } from '../hook/rtkHook';
import LoginRegistration from '../components/auth/LoginRegistration';

import LoginAuthorized from '../components/auth/LoginAuthorized';
import Alert from '../components/Alert';

const Login: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { alertList } = useAppSelector((state) => state.alert);

  return (
    <>
      <main className="container m-auto">
        {!isAuth ? <LoginRegistration /> : <LoginAuthorized />}
      </main>
      <div className="absolute top-0 left-1/2 right-1/2 grid grid-rows-1 space-y-10">
        {alertList.map((alert, index) =>
          alert.visible ? (
            <Alert key={index} message={alert.message} alertType={alert.alertType} />
          ) : (
            ' '
          ),
        )}
      </div>
    </>
  );
};

export default Login;
