import React, { useContext } from 'react';
import PostItem from './PostItem';
import { PostsContext } from '../context/PostsContext';
import Modal from './Modal';
import CreatePost from './CreatePost';

const Posts = () => {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <Modal title="Create new post:">
        <CreatePost />
      </Modal>
      <ul className="mt-3">
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
          />
        ))}
      </ul>
    </>
  );
};

export default Posts;
