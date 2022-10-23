import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { IPost } from '../data/types';
import { usePosts } from '../hooks/usePosts';

interface IPostsContext {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  choosedPostID: number;
  setChoosedPostID: Dispatch<SetStateAction<number>>;
  loading: boolean;
  error: string;
}

interface PostsStateProps {
  children: React.ReactNode;
}

export const PostsContext = createContext<IPostsContext>({
  posts: [],
  setPosts: () => {
    return;
  },
  choosedPostID: 0,
  setChoosedPostID: () => {
    return;
  },
  loading: false,
  error: '',
});

const PostsState = ({ children }: PostsStateProps) => {
  const [choosedPostID, setChoosedPostID] = useState<number>(0);
  const { posts, setPosts, loading, error } = usePosts();

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        choosedPostID,
        setChoosedPostID,
        loading,
        error,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
