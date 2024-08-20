import React, { FC, useRef, useState } from 'react';

import { fetchLogin } from '../../redux/slices/usersSlice';
import { useAppDispatch } from '../../hook/rtkHook';

const LoginForm: FC = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginRef.current.value);
    console.log(passwordRef.current.value);

    const user = {
      email: loginRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(fetchLogin(user));
  };
  return (
    <form action="" className="space-y-6" onSubmit={handleSubmit}>
      <input
        className="py-2 px-3 w-full border rounded-2xl bg-[#f2f2f2]"
        placeholder="Login"
        ref={loginRef}
      />
      <input
        className="py-2 px-3 w-full border rounded-2xl bg-[#f2f2f2]"
        placeholder="Password"
        ref={passwordRef}
      />
      <button type="submit" className="btn_log">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
