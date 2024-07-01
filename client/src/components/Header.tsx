import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link className="hover:text-slate-500" to="/">
        Go to Home
      </Link>
      <Link className="hover:text-slate-500" to="/login">
        Go to Login
      </Link>
    </>
  );
};

export default Header;
