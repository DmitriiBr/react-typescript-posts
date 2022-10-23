import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { useExactPost } from '../hooks/useExactPost';
import Error from '../components/Error/Error';
import Comments from '../components/Comments';

const ExactPost = () => {
  const { id: postId } = useParams();
  const { exactPost, loading, error } = useExactPost(postId || '');

  return (
    <div className="mt-10">
      {error && <Error>{error}</Error>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-10">
            {exactPost?.id}. {exactPost?.title}
          </h1>
          <p className="text-xl">{exactPost?.body}</p>
          <Comments postId={postId} />
        </>
      )}
    </div>
  );
};

export default ExactPost;
