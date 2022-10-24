import axios from 'axios';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { INewPost, IPost } from '../data/types';

interface IPostsContext {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  choosedPostID: number;
  setChoosedPostID: Dispatch<SetStateAction<number>>;
  exactPost: IPost;
  getAllPosts: () => Promise<void>;
  addPost: (post: INewPost) => Promise<void>;
  deletePost: () => Promise<void>;
  editPost: (post: IPost | undefined) => Promise<void>;
  getExactPost: (id: string | undefined) => Promise<void>;
}

interface PostsStateProps {
  children: React.ReactNode;
}

export const PostsContext = createContext<IPostsContext>({
  posts: [],
  exactPost: {
    id: 0,
    body: '',
    title: '',
    userId: 0,
  },
  setPosts: () => {
    return;
  },
  choosedPostID: 0,
  setChoosedPostID: () => {
    return;
  },
  getAllPosts: async () => {
    return;
  },
  addPost: async () => {
    return;
  },
  deletePost: async () => {
    return;
  },
  editPost: async () => {
    return;
  },
  getExactPost: async () => {
    return;
  },
});

const PostsState = ({ children }: PostsStateProps) => {
  const [choosedPostID, setChoosedPostID] = useState<number>(0);
  const [exactPost, setExactPost] = useState<IPost>({
    id: 0,
    body: '',
    title: '',
    userId: 0,
  });
  const [posts, setPosts] = useState<IPost[]>([]);

  const getAllPosts = async () => {
    const response = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log('fetching all posts');

    setPosts(response.data);
  };

  const addPost = async (post: INewPost) => {
    const response = await axios.post<IPost>(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );

    setPosts([...posts, response.data]);
  };

  const deletePost = async () => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${choosedPostID}`
    );
    setPosts([...posts].filter((post) => choosedPostID !== post.id));
  };

  const editPost = async (post: IPost | undefined) => {
    const filteredPosts = posts.filter((post) => choosedPostID !== post.id);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${choosedPostID}`,
      post
    );
    const editedPost = response.data;

    setPosts([...filteredPosts, editedPost]);
  };

  const getExactPost = async (id: string | undefined) => {
    const response = await axios.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setExactPost(response.data);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        choosedPostID,
        setChoosedPostID,
        exactPost,
        getExactPost,
        getAllPosts,
        addPost,
        deletePost,
        editPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
