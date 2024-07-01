import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchLogout } from '../../redux/slices/usersSlice';

const LoginAuthorized = () => {
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(fetchLogout());
  };
  return (
    <>
      <div>Вы уже авторизованы под {username}</div>
      <button
        className="btn"
        onClick={() => {
          logout();
        }}>
        Выйти
      </button>
    </>
  );
};

export default LoginAuthorized;
