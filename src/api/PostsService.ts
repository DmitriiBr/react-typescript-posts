import axios from 'axios';
import { INewPost, IPost } from '../data/types';

export class PostService {
  public static async getAll({ limit = 10, current = 1 }) {
    const response = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: current,
        },
      }
    );

    return response;
  }

  public static async getExact(id: number) {
    const response = await axios.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }

  public static async addNew(body: INewPost) {
    const response = await axios.post<IPost>(
      'https://jsonplaceholder.typicode.com/posts',
      body
    );

    return response;
  }

  public static async delete(id: number) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public static async edit(body: IPost | undefined, id: number) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      body
    );
    return response;
  }
}
