import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <label className="flex flex-col text-left mb-2">
      <span className="ml-2">{label}</span>
      <input
        className="border border-gray-500 rounded py-1 px-2 text-xl mt-1"
        {...props}
      />
    </label>
  );
};

export default Input;
