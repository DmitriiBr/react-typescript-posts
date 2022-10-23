import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IPost } from '../data/types';

interface usePostsReturn {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  loading: boolean;
  error: string;
}

export const usePosts = (): usePostsReturn => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log('Posts fetched');
      setLoading(false);

      setPosts(response.data);
    } catch (e: unknown) {
      setLoading(false);

      if (axios.isAxiosError(e)) {
        setError(`${e.message}: ${e.code}`);
      } else {
        setError('Something went wrong');
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, setPosts, loading, error };
};
