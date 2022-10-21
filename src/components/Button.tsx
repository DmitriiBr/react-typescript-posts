import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  background?: string;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  background,
  color,
  type,
  onClick,
}) => {
  return (
    <button
      className={`py-2 px-4 border rounded ${background || 'bg-blue-300'} ${
        color || 'text-black'
      } mb-2 min-w-fit`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
