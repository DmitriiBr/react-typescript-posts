import React from 'react';

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder }) => {
  return (
    <label className="flex flex-col py-1 px-2 text-left">
      <span className="ml-2">{label}</span>
      <input
        className="border border-gray-500 rounded py-1 px-2 text-xl mt-1"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
