export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type INewPost = Pick<IPost, 'title' | 'body' | 'userId'>;

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
