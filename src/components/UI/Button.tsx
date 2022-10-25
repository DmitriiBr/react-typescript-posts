import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  background?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  background,
  color,
  ...props
}) => {
  return (
    <button
      className={`py-2 px-4 border rounded ${background || 'bg-blue-300'} ${
        color || 'text-black'
      } mb-2 min-w-fit`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
