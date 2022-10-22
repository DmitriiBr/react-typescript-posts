import React from 'react';
import { useParams } from 'react-router-dom';
import { useExactPost } from '../hooks/useExactPost';

const ExactPost = () => {
  const { id } = useParams();
  const { exactPost } = useExactPost(id || '');

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-10">
        {exactPost?.id}. {exactPost?.title}
      </h1>
      <p className="text-xl">{exactPost?.body}</p>
    </div>
  );
};

export default ExactPost;
