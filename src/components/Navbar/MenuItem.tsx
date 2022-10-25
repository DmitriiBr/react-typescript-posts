import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ route, title }: { route: string; title: string }) => {
  return (
    <Link to={route}>
      <li className="mr-2 text-2xl hover:text-white transition-all cursor-pointer">
        {title}
      </li>
    </Link>
  );
};

export default MenuItem;
