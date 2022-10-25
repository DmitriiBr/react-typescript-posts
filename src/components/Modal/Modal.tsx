import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ModalContext } from '../../context/ModalContext';
import ModalBackdrop from './ModalBackdrop';
import ModalContent from './ModalContent';

const Modal = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const { close, isAnyModalOpen } = useContext(ModalContext);
  const modalRef = useRef(null);

  return (
    <CSSTransition
      in={isAnyModalOpen}
      timeout={200}
      nodeRef={modalRef}
      classNames={'modal'}
      mountOnEnter
      unmountOnExit
    >
      <ModalBackdrop>
        <ModalContent modalRef={modalRef}>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <button
            className="absolute top-2 right-4 border border-red-600 rounded h-8 w-8 bg-red-300 hover:text-white hover:bg-red-600 transition-all"
            onClick={close}
          >
            &times;
          </button>
          {children}
        </ModalContent>
      </ModalBackdrop>
    </CSSTransition>
  );
};

export default Modal;
