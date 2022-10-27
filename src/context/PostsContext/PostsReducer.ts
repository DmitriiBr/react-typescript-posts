import { IPost } from '../../data/types';

interface IPages {
  current: number;
  limit: number;
  total: number;
}

export interface IPostsState {
  posts: IPost[];
  newPost: IPost;
  currentPost: IPost;
  currentPostID: number;
  pages: IPages;
}

interface IPostsAction {
  type: PostsActionTypes;
  payload: any;
}

enum PostsActionTypes {
  ADD_POST = 'ADD_POST',
  GET_ALL = 'GET_ALL',
}

export const PostsReducer = (
  state: IPostsState,
  { type, payload }: IPostsAction
) => {
  switch (type) {
    case PostsActionTypes.GET_ALL:
      return state;
    default:
      return state;
  }
};
