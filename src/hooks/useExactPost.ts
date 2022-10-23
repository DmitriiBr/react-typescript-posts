import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPost } from '../data/types';

export const useExactPost = (id: string) => {
  const [exactPost, setExactPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetchExactPost = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setLoading(false);

      setExactPost(response.data);
    } catch (e) {
      setLoading(false);

      if (axios.isAxiosError(e)) {
        setError(`${e.message}: ${e.code}`);
      } else {
        setError('Something went wrong');
      }
    }
  };

  useEffect(() => {
    fetchExactPost();
  }, []);

  return { exactPost, loading, error };
};
