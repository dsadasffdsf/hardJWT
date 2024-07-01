import React, { FC } from 'react';
import Sidebar from './post/Sidebar';
import PostsList from './post/PostsList';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <main className="container m-auto ">
      <header className="space-x-16 ">
        <Header />
      </header>

      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
