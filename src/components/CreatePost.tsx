import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import { IPost } from '../data/types';
import Button from './Button';
import Input from './Input';

const CreatePost = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const { close } = useContext(ModalContext);
  const [postError, setPostError] = useState<string>('');

  const postTemplate: IPost = {
    id: posts.length + 1,
    title: '',
    body: '',
    userId: Date.now(),
  };

  const [newPost, setNewPost] = useState(postTemplate);

  const onChangeHandler = (field: 'body' | 'title') => {
    return (inputValue: string) => {
      setPostError('');
      setNewPost({ ...newPost, [field]: inputValue });
    };
  };

  const handleCreatePost = () => {
    if (newPost.body && newPost.title) {
      console.log('created');
      setPosts([...posts, newPost]);
      close();
    } else {
      console.log('errored');
      setPostError('You shold write something.');
    }
  };

  return (
    <form
      className="flex flex-col justify-between"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        label="Post title: "
        type="text"
        placeholder="title..."
        value={newPost.title}
        setValue={onChangeHandler('title')}
      />
      {!newPost.title && postError && (
        <span className="text-red-500 px-3 text-sm">{postError}</span>
      )}
      <Input
        label="Post body: "
        type="textarea"
        placeholder="body..."
        value={newPost.body}
        setValue={onChangeHandler('body')}
      />
      {!newPost.body && postError && (
        <span className="text-red-500 px-3 text-sm">{postError}</span>
      )}
      <Button onClick={handleCreatePost}>Create</Button>
    </form>
  );
};

export default CreatePost;
