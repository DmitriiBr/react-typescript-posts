import React, { createContext, useEffect, useState } from 'react';

export enum ModalTypes {
  createPost = 'createPostModal',
  deletePost = 'deletePostModal',
  editPost = 'editPostModal',
}

export interface IVisibility {
  [ModalTypes.createPost]: boolean;
  [ModalTypes.deletePost]: boolean;
  [ModalTypes.editPost]: boolean;
}

interface IModalContext {
  visibility: IVisibility;
  open: (prop: keyof IVisibility) => void;
  close: () => void;
  isAnyModalOpen: boolean;
}

export const ModalContext = createContext<IModalContext>({
  visibility: {
    createPostModal: false,
    deletePostModal: false,
    editPostModal: false,
  },
  open: () => {
    return;
  },
  close: () => {
    return;
  },
  isAnyModalOpen: false,
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const visibilityTemplate: IVisibility = {
    createPostModal: false,
    deletePostModal: false,
    editPostModal: false,
  };

  const [visibility, setVisibility] = useState(visibilityTemplate);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  const open = (prop: keyof IVisibility) =>
    setVisibility({ ...visibility, [prop]: true });

  const close = () => {
    for (const key in visibility) {
      if (visibility[key as keyof IVisibility] === true) {
        setVisibility({ ...visibility, [key]: false });
      }
    }
  };

  useEffect(() => {
    if (
      visibility[ModalTypes.createPost] ||
      visibility[ModalTypes.deletePost] ||
      visibility[ModalTypes.editPost]
    ) {
      setIsAnyModalOpen(true);
      document.body.classList.add('modal-open');
    } else {
      setIsAnyModalOpen(false);
      document.body.classList.remove('modal-open');
    }
  }, [visibility]);

  return (
    <ModalContext.Provider value={{ visibility, open, close, isAnyModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
