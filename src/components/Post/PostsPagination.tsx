import React from 'react';
import { IPages } from '../../context/PostsContext';

const PostsPagination = ({
  pagesArray,
  pages,
  changePage,
}: {
  pagesArray: number[];
  pages: IPages;
  changePage: (current: number) => void;
}) => {
  return (
    <div className="flex align-center justify-between">
      {pagesArray.map((number) => (
        <button
          key={number}
          className={`font-bold transition-all text-xl border-b-2 border-b-black px-3 py-1 m-1 cursor-pointer ${
            pages.current === number
              ? 'text-blue-500 border-b-blue-500'
              : 'text-black'
          }`}
          onClick={() => changePage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PostsPagination;
