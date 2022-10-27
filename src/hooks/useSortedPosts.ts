import { useContext, useMemo } from 'react';
import { PostsContext } from '../context/PostsContext/PostsContext';
import { IPost } from '../data/types';

export const useSortedPosts = (selectedSort: keyof IPost) => {
  const { posts } = useContext(PostsContext);

  const getSortedPosts = (): IPost[] => {
    if (selectedSort) {
      return [...posts].sort((a, b) => {
        if (typeof a[selectedSort] === 'number') {
          return Number(a[selectedSort]) - Number(b[selectedSort]);
        } else {
          return String(a[selectedSort]).localeCompare(String(b[selectedSort]));
        }
      });
    }
    return posts;
  };

  const sortedPosts = useMemo(getSortedPosts, [posts, selectedSort]);

  return sortedPosts;
};
