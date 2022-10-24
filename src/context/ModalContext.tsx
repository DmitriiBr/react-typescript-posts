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
  close: (prop: keyof IVisibility) => void;
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
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const visibilityTemplate: IVisibility = {
    createPostModal: false,
    deletePostModal: false,
    editPostModal: false,
  };

  const [visibility, setVisibility] = useState(visibilityTemplate);

  const open = (prop: keyof IVisibility) =>
    setVisibility({ ...visibility, [prop]: true });

  const close = (prop: keyof IVisibility) =>
    setVisibility({ ...visibility, [prop]: false });

  useEffect(() => {
    if (
      visibility[ModalTypes.createPost] ||
      visibility[ModalTypes.deletePost] ||
      visibility[ModalTypes.editPost]
    ) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [visibility]);

  return (
    <ModalContext.Provider value={{ visibility, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
