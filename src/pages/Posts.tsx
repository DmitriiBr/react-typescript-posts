import React, { useContext, useMemo, useState } from 'react';
import PostsList from '../components/Post/PostsList';
import SearchMenu from '../components/SearchMenu';
import SortMenu from '../components/SortMenu';
import { ModalContext, ModalTypes } from '../context/ModalContext';
import { IPost } from '../data/types';
import { useSortedPosts } from '../hooks/useSortedPosts';

const Posts = () => {
  const { open } = useContext(ModalContext);
  const [selectedSort, setSelectedSort] = useState<keyof IPost>('id');
  const sortedPosts = useSortedPosts(selectedSort);

  const onSelectSortHandler = (property: keyof IPost) => {
    setSelectedSort(property);
  };

  return (
    <>
      <SearchMenu />
      <SortMenu
        data={['body', 'title']}
        onClick={onSelectSortHandler}
      />
      <PostsList posts={sortedPosts} />
      <button
        className="fixed right-5 bottom-5 border
         border-gray-500 py-2 px-2 bg-green-300 rounded 
         hover:bg-green-500 hover:text-white transition-all"
        onClick={() => open(ModalTypes.createPost)}
      >
        New post
      </button>
    </>
  );
};

export default Posts;
