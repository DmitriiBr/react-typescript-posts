import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  background?: string;
  color?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  background,
  color,
  onClick,
  children,
}) => {
  return (
    <button
      className={`py-2 px-4 border rounded ${background || 'bg-blue-300'} ${
        color || 'text-black'
      } mb-2 min-w-fit`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
