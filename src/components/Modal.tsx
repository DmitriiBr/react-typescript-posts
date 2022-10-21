import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const { isVisible } = useContext(ModalContext);

  return (
    <>
      {isVisible && (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 overflow-hidden">
          <div
            className="fixed py-2 px-4 top-1/4 bottom-0 right-0 left-1/2 max-w-xl -translate-x-1/2 bg-slate-200 h-fit rounded"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
