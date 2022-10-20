import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import axios from 'axios';
import { IPost } from '../data/types';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );

    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container flex justify-center">
      <ul className="mt-3 max-w-3xl">
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
