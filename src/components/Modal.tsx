import React, { useContext, useRef } from 'react';
import { IVisibility, ModalContext } from '../context/ModalContext';
import { CSSTransition } from 'react-transition-group';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  modalType: keyof IVisibility;
}

const Modal: React.FC<ModalProps> = ({ children, title, modalType }) => {
  const backDropRef = useRef(null);
  const { visibility, close } = useContext(ModalContext);
  const modalRef = useRef(null);

  const closeHandler = (e: React.MouseEvent) => {
    if (backDropRef.current === e.target && modalRef.current !== e.target) {
      close(modalType);
    }
  };

  return (
    <>
      <CSSTransition
        in={visibility[modalType]}
        timeout={200}
        nodeRef={modalRef}
        classNames={'modal'}
        unmountOnExit
      >
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50"
          style={{ marginRight: visibility[modalType] ? '-17px' : '0px' }}
          onClick={closeHandler}
          ref={backDropRef}
        >
          <div
            className="modal fixed py-2 px-4 top-1/3 right-0 left-1/2 bottom-0 max-w-xl  bg-slate-200 h-fit rounded"
            style={{
              left: visibility[modalType] ? '50%' : 'calc(50% + 8.5px)',
              translate: '-50%',
            }}
            ref={modalRef}
          >
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
      </CSSTransition>
    </>
  );
};

export default Modal;
