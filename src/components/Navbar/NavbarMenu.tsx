import React from 'react';
import { RouterPaths } from '../../routes';
import MenuItem from './MenuItem';

const NavbarMenu = () => {
  const menuItems = [
    { route: RouterPaths.POSTS, title: 'Posts' },
    { route: RouterPaths.LOGIN, title: 'Login' },
  ];

  return (
    <ul className="flex items-center justify-between">
      {menuItems.map((item) => (
        <MenuItem
          route={item.route}
          title={item.title}
          key={item.route}
        />
      ))}
    </ul>
  );
};

export default NavbarMenu;
