import React, { useContext } from 'react';
import { ModalContext, ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import { useFetch } from '../hooks/useFetch';
import Button from './Button';
import Error from './Error/Error';
import Loader from './Loader/Loader';

const DeletePost = () => {
  const { close } = useContext(ModalContext);
  const { deletePost } = useContext(PostsContext);
  const [deleteCurrentPost, deleteLoading, deleteError] = useFetch(deletePost);
  const closeHandler = () => close(ModalTypes.deletePost);

  const deletePostHandler = async () => {
    await deleteCurrentPost();
    close(ModalTypes.deletePost);
  };

  return (
    <>
      {deleteError && <Error>{deleteError}</Error>}
      {deleteLoading ? (
        <Loader />
      ) : (
        <div className="">
          <Button onClick={closeHandler}>Cancel</Button>
          <Button
            onClick={deletePostHandler}
            background="bg-red-400"
            color="text-white"
          >
            Delete
          </Button>
        </div>
      )}
    </>
  );
};

export default DeletePost;
