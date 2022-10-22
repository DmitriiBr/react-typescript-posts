import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPost } from '../data/types';

export const useExactPost = (id: string) => {
  const [exactPost, setExactPost] = useState<IPost>();

  const fetchExactPost = async () => {
    try {
      const response = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setExactPost(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchExactPost();
  }, []);

  return { exactPost };
};
