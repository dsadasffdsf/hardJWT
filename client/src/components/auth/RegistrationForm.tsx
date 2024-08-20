import React, { FC, useRef, useState } from 'react';

import { useAppDispatch } from '../../hook/rtkHook';
import { fetchRegistration } from '../../redux/slices/usersSlice';

const RegistrationForm: FC = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let validateForm = true;
    const emailValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailValue) {
      validateForm = false;
      setEmailError('Поле email пустое');
      console.log('Поле email пустое');
    } else if (!emailRegex.test(emailValue)) {
      validateForm = false;
      setEmailError('Поле Email некорректно');
      console.log(emailError, 'fdsfsdf');

      console.log('Поле Email некорректно');
    } else {
      setEmailError('');
      console.log('Все верно');
    }

    if (!passwordValue) {
      validateForm = false;
      setPasswordError('Поле password пустое');
      console.log('Поле password пустое');
    } else {
      if (passwordValue.length < 4) {
        validateForm = false;
        console.log('4 цифрыыыы');

        setPasswordError('Пароль должен содержать минимум 4 символа');
      } else if (!/(?=.*\d)/.test(passwordValue)) {
        validateForm = false
        setPasswordError('Пароль должен содержать хотя бы одну цифру');
      } else {
        setPasswordError('');
        console.log('Все верно');
      }
    }

    if (validateForm) {
      const user = {
        email: emailValue,
        password: passwordValue,
      };
      dispatch(fetchRegistration(user));
    }
  };
  return (
    <form action="#" className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
          className={`py-2 px-3 w-full border  rounded-2xl bg-[#f2f2f2] ${
            emailError ? 'border-red-600' : ''
          }`}
          placeholder="Login Reg"
          ref={loginRef}
        />
        {emailError ? <div className="text-red-600 text-sm mt-1">{emailError}</div> : ''}
      </div>
      <div>
        <input
          className={`py-2 px-3 w-full border rounded-2xl bg-[#f2f2f2] ${
            passwordError ? 'border-red-600' : ''
          }`}
          type="text"
          placeholder="Password Reg"
          ref={passwordRef}
        />
        {passwordError ? <div className="text-red-600 text-sm mt-1">{passwordError}</div> : ''}
      </div>

      <button type="submit" className="btn_log">
        Регистрация
      </button>
    </form>
  );
};

export default RegistrationForm;
