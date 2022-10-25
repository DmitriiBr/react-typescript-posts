import React, { useContext, useMemo } from 'react';
import { ModalContext, ModalTypes } from '../../context/ModalContext';
import CreatePost from '../Forms/Post/CreatePost';
import DeletePost from '../Forms/Post/DeletePost';
import EditPost from '../Forms/Post/EditPost';
import Modal from '../Modal/Modal';

const PostActions = () => {
  const { visibility } = useContext(ModalContext);

  const modals = [
    {
      modalType: ModalTypes.createPost,
      title: 'Create new Post: ',
      element: <CreatePost />,
    },
    {
      modalType: ModalTypes.deletePost,
      title: 'Do you really want to delete this post?',
      element: <DeletePost />,
    },
    {
      modalType: ModalTypes.editPost,
      title: 'Post ediding',
      element: <EditPost />,
    },
  ];

  const currentModal = useMemo(() => {
    return modals.find((modal) => visibility[modal.modalType] === true);
  }, [visibility]);

  return <Modal title={currentModal?.title}>{currentModal?.element}</Modal>;
};

export default PostActions;
