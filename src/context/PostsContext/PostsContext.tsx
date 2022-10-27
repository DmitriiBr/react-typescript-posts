import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from 'react';
import { PostService } from '../../api/PostsService';
import { INewPost, IPost } from '../../data/types';
import { getPagesCount } from '../../utils/pages';
import { IPostsState, PostsReducer } from './PostsReducer';

export interface IPages {
  current: number;
  limit: number;
  total: number;
}

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
  pages: IPages;
  setPages: Dispatch<SetStateAction<IPages>>;
}

export const PostsContext = createContext<IPostsContext>({} as IPostsContext);

const PostsState = ({ children }: { children: React.ReactNode }) => {
  const [choosedPostID, setChoosedPostID] = useState<number>(0);
  const [exactPost, setExactPost] = useState<IPost>({
    id: 0,
    body: '',
    title: '',
    userId: 0,
  });
  const [posts, setPosts] = useState<IPost[]>([]);
  const [pages, setPages] = useState({
    current: Number(localStorage.getItem('currentPage')) || 1,
    total: 0,
    limit: 10,
  });

  const postsStateTemplate: IPostsState = {
    posts: [],
    currentPost: {} as IPost,
    currentPostID: 0,
    newPost: {} as IPost,
    pages: {
      current: Number(localStorage.getItem('currentPage')) || 1,
      total: 0,
      limit: 10,
    },
  };

  const [postsState, postsDispatch] = useReducer(
    PostsReducer,
    postsStateTemplate
  );

  const getAllPosts = async () => {
    const response = await PostService.getAll(pages);
    const totalPosts = response.headers['x-total-count'];
    const totalPages = getPagesCount(Number(totalPosts), pages.limit);

    setPages({
      ...pages,
      total: totalPages,
    });
    setPosts(response.data);
  };

  const addPost = async (post: INewPost) => {
    const response = await PostService.addNew(post);
    setPosts([...posts, response.data]);
  };

  const deletePost = async () => {
    await PostService.delete(choosedPostID);
    setPosts([...posts].filter((post) => choosedPostID !== post.id));
  };

  const editPost = async (post: IPost | undefined) => {
    const response = await PostService.edit(post, choosedPostID);
    const filteredPosts = posts.filter((post) => choosedPostID !== post.id);
    setPosts([...filteredPosts, response.data]);
  };

  const getExactPost = async (id: string | undefined) => {
    const response = await PostService.getExact(Number(id));
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
        pages,
        setPages,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
