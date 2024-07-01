import React, { FC, useState } from 'react';
import LoginForm from './LoginFrom';
import RegistrationForm from './RegistrationForm';

const LoginRegistration: FC = () => {
  const [login, setLogin] = useState('login');
  return (
    <section className="flex justify-center items-center mt-16">
      <div className="flex-col flex space-y-6 w-[250px] form_log_wrapper py-8 px-4">
        <div className="flex justify-center">
          <h2
            className={`hover:text-gray-400 cursor-pointer ${
              login === 'login' ? 'active_btn_log' : ''
            }`}
            onClick={() => setLogin('login')}>
            Login
          </h2>
          /
          <h2
            className={`hover:text-gray-400 cursor-pointer ${
              login === 'registration' ? 'active_btn_log' : ''
            }`}
            onClick={() => setLogin('registration')}>
            Registration
          </h2>
        </div>
        {login === 'login' ? <LoginForm /> : <RegistrationForm />}
      </div>
    </section>
  );
};

export default LoginRegistration;
