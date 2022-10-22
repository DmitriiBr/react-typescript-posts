import React from 'react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../routes/indes';

const Navbar = () => {
  return (
    <nav
      className="flex justify-between 
    py-2 px-5 bg-blue-500
    items-center shadow-md shadow-gray-300 fixed w-full"
    >
      <span className="text-2xl font-bold text-white">Logo</span>
      <ul className="flex items-center justify-between">
        <Link to={RouterPaths.MAIN}>
          <li className="mr-2 text-2xl hover:text-white transition-all cursor-pointer">
            Home
          </li>
        </Link>
        <Link to={RouterPaths.LOGIN}>
          <li className="mr-2 text-2xl hover:text-white transition-all cursor-pointer">
            Login
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
