import React, { useContext, useState } from 'react';
import { ModalContext, ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import { IPost } from '../data/types';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

const CreatePost = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const { close } = useContext(ModalContext);
  const [postError, setPostError] = useState<string>('');

  const postTemplate: IPost = {
    id: Date.now(),
    title: '',
    body: '',
    userId: Date.now(),
  };

  const [newPost, setNewPost] = useState(postTemplate);

  const onChangeHandler = (field: 'body' | 'title') => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPostError('');
      setNewPost({ ...newPost, [field]: e.target.value });
    };
  };

  const handleCreatePost = (e: React.FormEvent) => {
    if (newPost.body && newPost.title) {
      e.preventDefault();
      setPosts([...posts, newPost]);
      close(ModalTypes.createPost);
    } else {
      e.preventDefault();
      console.log('errored');
      setPostError('You shold write something.');
    }
  };

  return (
    <form
      className="flex flex-col justify-between"
      onSubmit={handleCreatePost}
    >
      <Input
        label="Post title: "
        type="text"
        placeholder="title..."
        value={newPost.title}
        onChange={onChangeHandler('title')}
      />
      {!newPost.title && postError && (
        <span className="text-red-500 px-3 text-sm">{postError}</span>
      )}
      <TextArea
        label="Post body: "
        placeholder="body..."
        value={newPost.body}
        onChange={onChangeHandler('body')}
      />
      {!newPost.body && postError && (
        <span className="text-red-500 px-3 text-sm">{postError}</span>
      )}
      <Button>Create</Button>
    </form>
  );
};

export default CreatePost;
