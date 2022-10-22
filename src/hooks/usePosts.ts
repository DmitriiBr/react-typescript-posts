import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IPost } from '../data/types';

interface usePostsReturn {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}

export const usePosts = (): usePostsReturn => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log('Posts fetched');

    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, setPosts };
};
