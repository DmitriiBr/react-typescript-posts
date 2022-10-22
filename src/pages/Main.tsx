import React, { useContext, useMemo, useState } from 'react';
import Posts from '../components/Posts';
import SearchMenu from '../components/SearchMenu';
import SortMenu from '../components/SortMenu';
import { ModalContext } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import { IPost } from '../data/types';

const Main = () => {
  const { open } = useContext(ModalContext);
  const { posts } = useContext(PostsContext);
  const [selectedSort, setSelectedSort] = useState<keyof IPost>();

  const getSortedPosts = (): IPost[] => {
    if (selectedSort) {
      return [...posts].sort((a, b) => {
        if (typeof a[selectedSort] === 'number') {
          return Number(a[selectedSort]) - Number(b[selectedSort]);
        } else {
          return String(a[selectedSort]).localeCompare(String(b[selectedSort]));
        }
      });
    }
    return posts;
  };

  const sortedPosts = useMemo(getSortedPosts, [posts, selectedSort]);

  const onSelectSortHandler = (property: keyof IPost) => {
    setSelectedSort(property);
  };

  return (
    <div className="pt-20 container flex justify-center items-center flex-col max-w-3xl m-auto">
      <h1 className="text-center font-bold font-mono text-3xl">Hello world</h1>
      <SearchMenu />
      <SortMenu
        data={['body', 'title', 'id']}
        onClick={onSelectSortHandler}
      />
      <Posts posts={sortedPosts} />
      <button
        className="fixed right-5 bottom-5 border
         border-gray-500 py-2 px-2 bg-green-300 rounded 
         hover:bg-green-500 hover:text-white transition-all"
        onClick={open}
      >
        New post
      </button>
    </div>
  );
};

export default Main;