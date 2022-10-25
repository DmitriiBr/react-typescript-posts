import React, { useContext, useRef } from 'react';
import { ModalContext } from '../../context/ModalContext';

const ModalBackdrop = ({ children }: { children: React.ReactNode }) => {
  const { close, isAnyModalOpen } = useContext(ModalContext);
  const backDropRef = useRef(null);

  const closeHandler = (e: React.MouseEvent) => {
    if (backDropRef.current === e.target) {
      close();
    }
  };

  return (
    <div
      className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50"
      style={{ marginRight: isAnyModalOpen ? '-17px' : '0px' }}
      onClick={closeHandler}
      ref={backDropRef}
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;
