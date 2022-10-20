import React from 'react';
import { IPost } from '../data/types';
import Button from './Button';

interface PostItemProps {
  post: IPost;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const clickHandler = () => console.log('clicked');

  return (
    <li className="mb-2 py-2 px-4 border border-gray-600 flex justify-between items-center">
      <div className="px-4 w-4/5">
        <h1 className="text-2xl font-bold mb-2">
          {post.id}. {post.title}
        </h1>
        <p className="font-normal text-gray-500 mb-2">{post.body}</p>
        <span>User who post this has and id of: {post.userId}</span>
      </div>
      <div className="flex flex-col w-1/5">
        <Button onClick={clickHandler}>Open post</Button>
        <Button
          onClick={clickHandler}
          background={'bg-red-400'}
          color={'text-white'}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default PostItem;
