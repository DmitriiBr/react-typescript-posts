import React from 'react';
import Input from './Input';

const SearchMenu = () => {
  return (
    <div className="flex flex-col w-full border border-gray-500 py-2 px-4 mb-2">
      <Input
        label="Search: "
        type="text"
      />
    </div>
  );
};

export default SearchMenu;
