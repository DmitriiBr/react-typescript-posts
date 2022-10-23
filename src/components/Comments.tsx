import React, { FC } from 'react';
import { useComments } from '../hooks/useComments';
import CommentsItem from './CommentsItem';
import Loader from './Loader/Loader';
import Error from './Error/Error';

interface CommentsProps {
  postId: string | undefined;
}

const Comments: FC<CommentsProps> = ({ postId }) => {
  const { comments, loading, error } = useComments(postId || '');

  return (
    <>
      {error && <Error>{error}</Error>}
      {loading ? (
        <div className="mt-20">
          <Loader />
        </div>
      ) : (
        <ul className="mt-20 flex flex-col align-center">
          <h1 className="text-2xl mb-8 text-center">Comments: </h1>
          {comments.map((comment) => (
            <CommentsItem
              comment={comment}
              key={comment.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Comments;
