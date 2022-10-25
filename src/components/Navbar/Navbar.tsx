import React from 'react';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <nav className="flex justify-center py-2 px-4 bg-blue-500 shadow-md shadow-gray-300 fixed w-full">
      <div
        className="flex align-center justify-between"
        style={{ width: '800px' }}
      >
        <span className="text-2xl font-bold text-white">Logo</span>
        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
