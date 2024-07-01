import React, { FC, useRef } from 'react';


import { useAppDispatch } from '../../hook';
import { fetchRegistration } from '../../redux/slices/usersSlice';


const RegistrationForm: FC = () => {
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
    dispatch(fetchRegistration(user));
  };
  return (
    <form action="#" className="space-y-6" onSubmit={handleSubmit}>
      <input
        className="py-2 px-3 w-full border rounded-2xl bg-[#f2f2f2]"
        placeholder="Login Reg"
        ref={loginRef}
      />
      <input
        className="py-2 px-3 w-full border rounded-2xl bg-[#f2f2f2]"
        type="text"
        placeholder="Password Reg"
        ref={passwordRef}
      />
      <button type="submit" className="btn_log">
        Регистрация
      </button>
    </form>
  );
};

export default RegistrationForm;
