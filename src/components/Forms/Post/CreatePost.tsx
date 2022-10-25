import React, { useContext, useState } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { PostsContext } from '../../../context/PostsContext';
import { INewPost } from '../../../data/types';
import { useFetch } from '../../../hooks/useFetch';
import Button from '../../UI/Button';
import Error from '../../Error/Error';
import Input from '../../UI/Input';
import Loader from '../../Loader/Loader';
import TextArea from '../../UI/TextArea';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const { close } = useContext(ModalContext);
  const [postError, setPostError] = useState<string>('');

  const postTemplate: INewPost = {
    title: '',
    body: '',
    userId: Date.now(),
  };

  const [newPost, setNewPost] = useState(postTemplate);
  const [addNewPost, loadingNewPost, errorNewPost] = useFetch(() =>
    addPost(newPost)
  );

  const setPostAttribute = (field: 'body' | 'title') => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPostError('');
      setNewPost({ ...newPost, [field]: e.target.value });
    };
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    if (newPost.body && newPost.title) {
      e.preventDefault();
      await addNewPost();
      close();
    } else {
      e.preventDefault();
      console.log('errored');
      setPostError('You shold write something.');
    }
  };

  return (
    <>
      {errorNewPost && <Error>{errorNewPost}</Error>}
      {loadingNewPost ? (
        <Loader />
      ) : (
        <form
          className="flex flex-col justify-between"
          onSubmit={handleCreatePost}
        >
          <Input
            label="Post title: "
            type="text"
            placeholder="title..."
            value={newPost.title}
            onChange={setPostAttribute('title')}
          />
          {!newPost.title && postError && (
            <span className="text-red-500 px-3 text-sm">{postError}</span>
          )}
          <TextArea
            label="Post body: "
            placeholder="body..."
            value={newPost.body}
            onChange={setPostAttribute('body')}
          />
          {!newPost.body && postError && (
            <span className="text-red-500 px-3 text-sm">{postError}</span>
          )}
          <Button>Create</Button>
        </form>
      )}
    </>
  );
};

export default CreatePost;
