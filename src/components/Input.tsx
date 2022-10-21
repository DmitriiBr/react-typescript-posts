import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value?: string;
  setValue: (inputValue: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <label className="flex flex-col text-left mb-2">
      <span className="ml-2">{label}</span>
      {type === 'textarea' ? (
        <textarea
          className="border border-gray-500 rounded py-1 px-2 text-xl mt-1 h-20"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className="border border-gray-500 rounded py-1 px-2 text-xl mt-1"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={true}
        />
      )}
    </label>
  );
};

export default Input;
