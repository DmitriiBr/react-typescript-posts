import axios from 'axios';
import { useEffect, useState } from 'react';
import { IComment } from '../data/types';

interface useCommentsReturn {
  comments: IComment[];
  loading: boolean;
  error: string;
}

export const useComments = (postId: string): useCommentsReturn => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchComments = async () => {
    try {
      setError('');
      setLoading(true);

      const response = await axios.get<IComment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      setLoading(false);

      setComments(response.data);
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
    fetchComments();
  }, []);

  return { comments, loading, error };
};
