import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { IPost } from '../data/types';
import axios from 'axios';

interface IPostsContext {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}

interface PostsStateProps {
  children: React.ReactNode;
}

export const PostsContext = createContext<IPostsContext>({
  posts: [],
  setPosts: () => {
    return;
  },
});

const PostsState = ({ children }: PostsStateProps) => {
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

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
