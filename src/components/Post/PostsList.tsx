import React, { useContext, useEffect, useMemo, useState } from 'react';
import PostItem from './PostItem';
import { IPost } from '../../data/types';
import { PostsContext } from '../../context/PostsContext';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useFetch } from '../../hooks/useFetch';
import PostActions from './PostActions';

interface PostsProps {
  posts: IPost[];
}

const PostsList: React.FC<PostsProps> = ({ posts }) => {
  const { getAllPosts } = useContext(PostsContext);
  const [fetchPostsData, loadingPosts, errorPosts] = useFetch(getAllPosts);
  const [pagesTotal, setPagesTotal] = useState(10);
  const [pagesLimit, setPagesLimit] = useState(10);
  const [page, setPage] = useState(1);

  const pagesArray = useMemo(() => {
    const arr = [];

    for (let i = 0; i < pagesTotal; i++) {
      arr.push(i + 1);
    }

    return arr;
  }, [pagesTotal]);

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <>
      <PostActions />
      {errorPosts && <Error>{errorPosts}</Error>}
      {loadingPosts ? (
        <Loader />
      ) : (
        <ul className="mt-3">
          {posts.map((post, index) => (
            <PostItem
              post={post}
              index={index}
              key={post.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostsList;
