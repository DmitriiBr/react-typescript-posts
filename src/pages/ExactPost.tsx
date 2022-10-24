import React, { useContext, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import Comments from '../components/Comments';
import { PostsContext } from '../context/PostsContext';
import { useFetch } from '../hooks/useFetch';

const ExactPost = () => {
  const { exactPost, getExactPost } = useContext(PostsContext);
  const [fetchExactPost, exactPostLoading, exactPostError] =
    useFetch(getExactPost);

  useEffect(() => {
    fetchExactPost();
  }, []);

  return (
    <div className="mt-10">
      {exactPostError && <Error>{exactPostError}</Error>}
      {exactPostLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-10">{exactPost?.title}</h1>
          <p className="text-xl">{exactPost?.body}</p>
          <Comments postId={exactPost.id} />
        </>
      )}
    </div>
  );
};

export default ExactPost;
