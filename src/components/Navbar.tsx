import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="container flex justify-between 
    py-2 px-5 bg-blue-500
    items-center shadow-md shadow-gray-300 fixed"
    >
      <span className="text-2xl font-bold text-white">Logo</span>
      <ul className="flex items-center justify-between">
        <li className="mr-2 text-2xl hover:text-white transition-all">Home</li>
        <li className="mr-2 text-2xl hover:text-white transition-all">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
