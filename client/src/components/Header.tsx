import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hook/rtkHook';

const Header: FC = () => {
  const { username } = useAppSelector((state) => state.user);

  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'font-bold' : '';
  };
  return (
    <header className="container m-auto">
      <nav className="flex justify-between items-center py-4 relative max-sm:flex-col max-sm:space-y-4">
        <ul className="flex flex-1 space-x-4 justify-center">
          <Link className={`hover:text-slate-500 ${getLinkClass('/')}`} to="/">
            Home
          </Link>
          <Link className={`hover:text-slate-500 ${getLinkClass('/login')}`} to="/login">
            Login
          </Link>
        </ul>
        <div className="sm:absolute right-[15px]">
          {username ? username : `Пользователь не авторизован`}
        </div>
      </nav>
    </header>
  );
};

export default Header;
