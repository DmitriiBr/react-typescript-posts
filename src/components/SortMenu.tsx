import React, { useContext, useState } from 'react';
import { PostsContext } from '../context/PostsContext';
import { IPost } from '../data/types';

const SortMenu: React.FC = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const postTemplate = Object.keys(posts[0] || {}).reverse();

  const [highlighted, setHighlighted] = useState<boolean>();

  const onSort = (property: keyof IPost) => {
    console.log('sorted');
    setPosts(
      [...posts].sort((a, b) =>
        String(a[property]).localeCompare(String(b[property]))
      )
    );
  };

  return (
    <ul className="flex justify-around w-full border border-gray-500 py-2 px-4">
      {postTemplate.map((property) => (
        <li
          key={property}
          className="font-bold cursor-pointer"
          onClick={() => onSort(property as keyof IPost)}
        >
          {property}
        </li>
      ))}
    </ul>
  );
};

export default SortMenu;
