import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext, ModalTypes } from '../../context/ModalContext';
import { PostsContext } from '../../context/PostsContext/PostsContext';
import { IPost } from '../../data/types';
import Button from '../UI/Button';

interface PostItemProps {
  post: IPost;
  index: number;
}

const PostItem: React.FC<PostItemProps> = ({ post, index }) => {
  const { setChoosedPostID } = useContext(PostsContext);
  const { open } = useContext(ModalContext);

  const navigate = useNavigate();

  const askForDeletingPost = (id: number) => {
    open(ModalTypes.deletePost);
    setChoosedPostID(id);
  };

  const askForEditingPost = (id: number) => {
    open(ModalTypes.editPost);
    setChoosedPostID(id);
  };

  const handleOpenExactPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const postBodyShorter = (body: string) => {
    if (body.length > 100) {
      return body.slice(0, 100) + '...';
    } else {
      return body;
    }
  };

  return (
    <li className="mb-2 py-2 px-4 border border-gray-600 flex justify-between items-end">
      <div className="px-4 w-4/5">
        <h1
          className="text-2xl font-bold mb-2 cursor-pointer hover:text-blue-500"
          onClick={() => handleOpenExactPost(post.id)}
        >
          {post.id}. {post.title}
        </h1>
        <p className="font-normal text-gray-500 mb-2">
          {postBodyShorter(post.body)}
        </p>
        <span>User who post this has and id of: {post.userId}</span>
      </div>
      <div className="flex flex-col w-1/5">
        <Button onClick={() => askForEditingPost(post.id)}>Edit</Button>
        <Button
          onClick={() => askForDeletingPost(post.id)}
          background={'bg-red-400'}
          color={'text-white'}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default PostItem;
