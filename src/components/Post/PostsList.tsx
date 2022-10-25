import React, { useContext, useEffect } from 'react';
import PostItem from './PostItem';
import { IPost } from '../../data/types';
import { PostsContext } from '../../context/PostsContext';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useFetch } from '../../hooks/useFetch';
import PostActions from './PostActions';
import { usePagination } from '../../hooks/usePagination';

interface PostsProps {
  posts: IPost[];
}

const PostsList: React.FC<PostsProps> = ({ posts }) => {
  const { getAllPosts, pages, setPages } = useContext(PostsContext);

  const [fetchPostsData, loadingPosts, errorPosts] = useFetch(getAllPosts);

  const [pagesArray] = usePagination(pages.total);

  useEffect(() => {
    fetchPostsData();
    localStorage.setItem('currentPage', String(pages.current));
  }, [pages.current]);

  return (
    <>
      <PostActions />
      {errorPosts && <Error>{errorPosts}</Error>}
      {loadingPosts ? (
        <Loader />
      ) : (
        <>
          <ul className="mt-3">
            {posts.map((post, index) => (
              <PostItem
                post={post}
                index={index}
                key={post.id}
              />
            ))}
          </ul>
          <div className="flex align-center justify-between">
            {pagesArray.map((number) => (
              <button
                key={number}
                className={`font-bold transition-all text-xl border-b-2 border-b-black px-3 py-1 m-1 cursor-pointer ${
                  pages.current === number
                    ? 'text-blue-500 border-b-blue-500'
                    : 'text-black'
                }`}
                onClick={() => setPages({ ...pages, current: number })}
              >
                {number}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PostsList;
