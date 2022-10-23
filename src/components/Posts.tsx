import React, { useContext } from 'react';
import PostItem from './PostItem';
import Modal from './Modal';
import CreatePost from './CreatePost';
import { IPost } from '../data/types';
import DeletePost from './DeletePost';
import { ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import EditPost from './EditPost';

interface PostsProps {
  posts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { loading, error } = useContext(PostsContext);
  return (
    <>
      <Modal
        title="Create new post:"
        modalType={ModalTypes.createPost}
      >
        <CreatePost />
      </Modal>
      <Modal
        title="Do you really want to delete this post?"
        modalType={ModalTypes.deletePost}
      >
        <DeletePost />
      </Modal>
      <Modal
        title="Post editing"
        modalType={ModalTypes.editPost}
      >
        <EditPost />
      </Modal>
      {error && <Error>{error}</Error>}
      {loading ? (
        <Loader />
      ) : (
        <ul className="mt-3">
          {posts.map((post) => (
            <PostItem
              post={post}
              key={post.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
