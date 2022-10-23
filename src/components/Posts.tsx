import React, { useContext } from 'react';
import PostItem from './PostItem';
import Modal from './Modal';
import CreatePost from './CreatePost';
import { IPost } from '../data/types';
import DeletePost from './DeletePost';
import { ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import Loader from './Loader/Loader';

interface PostsProps {
  posts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { loading } = useContext(PostsContext);
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
