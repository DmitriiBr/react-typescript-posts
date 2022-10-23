import React, { FC } from 'react';
import { IComment } from '../data/types';

interface CommentsItemProps {
  comment: IComment;
}

const CommentsItem: FC<CommentsItemProps> = ({ comment }) => {
  return (
    <li className="mb-5 px-4 py-2 border rounded border-gray-500">
      <h2 className="text-xl mb-2 font-bold">{comment.name}</h2>
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentsItem;
