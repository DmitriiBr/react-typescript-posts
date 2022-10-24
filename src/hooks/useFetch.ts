import axios from 'axios';
import { useState } from 'react';

type UseFetchReturn = [() => Promise<void>, boolean, string];

export const useFetch = (callback: () => Promise<void>): UseFetchReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setError('');
      setLoading(true);
      await callback();
      setLoading(false);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setLoading(false);
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, loading, error];
};
