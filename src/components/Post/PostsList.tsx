import React, { useContext, useEffect } from 'react';
import PostItem from './PostItem';
import { IPost } from '../../data/types';
import { PostsContext } from '../../context/PostsContext';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useFetch } from '../../hooks/useFetch';
import PostActions from './PostActions';
import { usePagination } from '../../hooks/usePagination';
import PostsPagination from './PostsPagination';

interface PostsProps {
  posts: IPost[];
}

const PostsList: React.FC<PostsProps> = ({ posts }) => {
  const { getAllPosts, pages, setPages } = useContext(PostsContext);
  const [fetchPostsData, loadingPosts, errorPosts] = useFetch(getAllPosts);
  const [pagesArray] = usePagination(pages.total);

  const changePageHandler = (current: number) =>
    setPages({ ...pages, current });

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
          <PostsPagination
            changePage={changePageHandler}
            pages={pages}
            pagesArray={pagesArray}
          />
        </>
      )}
    </>
  );
};

export default PostsList;
