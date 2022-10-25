import React, { useContext, useState } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { PostsContext } from '../../../context/PostsContext';
import { IPost } from '../../../data/types';
import { useFetch } from '../../../hooks/useFetch';
import Button from '../../UI/Button';
import Error from '../../Error/Error';
import Input from '../../UI/Input';
import Loader from '../../Loader/Loader';
import TextArea from '../../UI/TextArea';

const EditPost = () => {
  const { posts, choosedPostID, editPost } = useContext(PostsContext);
  const { close } = useContext(ModalContext);
  const [postError, setPostError] = useState<string>('');

  const [currentPost, setCurrentPost] = useState<IPost | undefined>(
    posts.find((post) => post.id === choosedPostID)
  );

  const [fetchEditedPost, editedPostLoading, editedPostError] = useFetch(() =>
    editPost(currentPost)
  );

  const editPostHandler = (field: 'body' | 'title') => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPostError('');
      if (currentPost) {
        setCurrentPost({ ...currentPost, [field]: e.target.value });
      }
    };
  };

  const submitEdidingHandler = async (e: React.FormEvent) => {
    if (currentPost) {
      if (currentPost.body && currentPost.title) {
        e.preventDefault();
        await fetchEditedPost();
        close();
      } else {
        e.preventDefault();
        setPostError('You shold write something.');
      }
    }
  };

  return (
    <>
      {editedPostError && <Error>{editedPostError}</Error>}
      {editedPostLoading ? (
        <Loader />
      ) : (
        <form
          className="flex flex-col justify-between"
          onSubmit={submitEdidingHandler}
        >
          <Input
            label="Post title: "
            type="text"
            placeholder="title..."
            value={currentPost?.title}
            onChange={editPostHandler('title')}
            autoFocus={true}
          />
          {postError && (
            <span className="text-red-500 px-3 text-sm">{postError}</span>
          )}
          <TextArea
            label="Post body: "
            placeholder="body..."
            value={currentPost?.body}
            onChange={editPostHandler('body')}
          />
          {postError && (
            <span className="text-red-500 px-3 text-sm">{postError}</span>
          )}
          <Button>Apply changes</Button>
        </form>
      )}
    </>
  );
};

export default EditPost;
