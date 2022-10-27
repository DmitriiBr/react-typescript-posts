import React, { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { PostsContext } from '../../../context/PostsContext/PostsContext';
import { useFetch } from '../../../hooks/useFetch';
import Button from '../../UI/Button';
import Error from '../../Error/Error';
import Loader from '../../Loader/Loader';

const DeletePost = () => {
  const { close } = useContext(ModalContext);
  const { deletePost } = useContext(PostsContext);
  const [deleteCurrentPost, deleteLoading, deleteError] = useFetch(deletePost);

  const deletePostHandler = async () => {
    await deleteCurrentPost();
    close();
  };

  return (
    <>
      {deleteError && <Error>{deleteError}</Error>}
      {deleteLoading ? (
        <Loader />
      ) : (
        <div className="">
          <Button onClick={close}>Cancel</Button>
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
