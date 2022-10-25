import { useMemo } from 'react';
export const usePagination = (total: number) => {
  const arr: number[] = [];
  const pagesArray = useMemo(() => {
    for (let i = 0; i < total; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [total]);

  return [pagesArray];
};
