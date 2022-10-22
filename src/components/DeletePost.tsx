import React, { useContext } from 'react';
import { ModalContext, ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import Button from './Button';

const DeletePost = () => {
  const { close } = useContext(ModalContext);
  const { choosedPostID, posts, setPosts } = useContext(PostsContext);
  const closeHandler = () => close(ModalTypes.deletePost);

  const deletePostHandler = () => {
    close(ModalTypes.deletePost);
    setPosts([...posts].filter((post) => choosedPostID !== post.id));
  };

  return (
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
  );
};

export default DeletePost;
