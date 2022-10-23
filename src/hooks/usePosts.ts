import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IPost } from '../data/types';

interface usePostsReturn {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  loading: boolean;
}

export const usePosts = (): usePostsReturn => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log('Posts fetched');
      setLoading(false);

      setPosts(response.data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, setPosts, loading };
};
