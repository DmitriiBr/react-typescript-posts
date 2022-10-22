import React, { useContext, useRef } from 'react';
import { IVisibility, ModalContext } from '../context/ModalContext';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  modalType: keyof IVisibility;
}

const Modal: React.FC<ModalProps> = ({ children, title, modalType }) => {
  const backDropRef = useRef(null);
  const { visibility, close } = useContext(ModalContext);

  const closeHandler = (e: React.MouseEvent) => {
    if (backDropRef.current === e.target) {
      close(modalType);
    }
  };

  return (
    <>
      {visibility[modalType] && (
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 overflow-hidden"
          onClick={closeHandler}
          ref={backDropRef}
        >
          <div className="fixed py-2 px-4 top-1/4 bottom-0 right-0 left-1/2 max-w-xl -translate-x-1/2 bg-slate-200 h-fit rounded">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <button
              className="absolute top-2 right-4 border border-red-600 rounded h-8 w-8 bg-red-300 hover:text-white hover:bg-red-600 transition-all"
              onClick={() => close(modalType)}
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
