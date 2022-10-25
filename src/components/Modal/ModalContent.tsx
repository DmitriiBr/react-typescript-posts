import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

const ModalContent = ({
  children,
  modalRef,
}: {
  children: React.ReactNode;
  modalRef: React.MutableRefObject<null>;
}) => {
  const { isAnyModalOpen } = useContext(ModalContext);

  return (
    <div
      className="modal fixed py-2 px-4 top-1/3 right-0 left-1/2 bottom-0 max-w-xl  bg-slate-200 h-fit rounded"
      style={{
        left: isAnyModalOpen ? '50%' : 'calc(50% + 8.5px)',
        translate: '-50%',
      }}
      ref={modalRef}
    >
      {children}
    </div>
  );
};

export default ModalContent;
