import React from 'react';
import { IPost } from '../data/types';

type IData = IPost;

interface SortMenuProps {
  data: Array<keyof IData>;
  onClick: (property: keyof IData) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ data, onClick }) => {
  return (
    <ul className="flex justify-around w-full border border-gray-500 py-2 px-4">
      {data.map((property) => (
        <li
          key={property}
          className="font-bold cursor-pointer"
          onClick={() => onClick(property)}
        >
          {property}
        </li>
      ))}
    </ul>
  );
};

export default SortMenu;
