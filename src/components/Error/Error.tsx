import React, { FC, ReactNode } from 'react';

const Error: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="border rounded border-red-900 mt-10 py-2 px-4">
      <span className="text-red-500 text-2xl font-bold">{children}</span>
    </div>
  );
};

export default Error;
