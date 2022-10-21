import React, { createContext, useEffect, useState } from 'react';

interface IModalContext {
  isVisible: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  isVisible: false,
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const open = () => {
    setIsVisible(true);
  };

  const close = () => setIsVisible(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  return (
    <ModalContext.Provider value={{ isVisible, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
