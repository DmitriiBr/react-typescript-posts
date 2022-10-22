import React from 'react';
import PostItem from './PostItem';
import Modal from './Modal';
import CreatePost from './CreatePost';
import { IPost } from '../data/types';

interface PostsProps {
  posts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
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
