import React from 'react';
import Input from './Input';

const SearchMenu = () => {
  return (
    <div className="flex flex-col w-full border border-gray-500 py-2 px-4 mb-2">
      <Input
        label="Search by title"
        type="text"
        value=""
        setValue={() => console.log('inputed')}
      />
      <Input
        label="Search by body"
        type="text"
        value=""
        setValue={() => console.log('inputed')}
      />
    </div>
  );
};

export default SearchMenu;
