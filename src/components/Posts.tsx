import React, { useContext } from 'react';
import PostItem from './PostItem';
import { PostsContext } from '../context/PostsContext';

const Posts = () => {
  const { posts } = useContext(PostsContext);

  return (
    <ul className="mt-3">
      {posts.map((post) => (
        <PostItem
          post={post}
          key={post.id}
        />
      ))}
    </ul>
  );
};

export default Posts;
