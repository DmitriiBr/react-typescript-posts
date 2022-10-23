import React, { useContext, useEffect, useState } from 'react';
import { ModalContext, ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import { IPost } from '../data/types';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

const EditPost = () => {
  const { posts, setPosts, choosedPostID } = useContext(PostsContext);
  const { close } = useContext(ModalContext);
  const [postError, setPostError] = useState<string>('');

  const [currentPost, setCurrentPost] = useState<IPost | undefined>(
    posts.find((post) => post.id === choosedPostID)
  );

  const editPostHandler = (field: 'body' | 'title') => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPostError('');
      if (currentPost) {
        setCurrentPost({ ...currentPost, [field]: e.target.value });
      }
    };
  };

  const submitEdidingHandler = (e: React.FormEvent) => {
    if (currentPost) {
      if (currentPost.body && currentPost.title) {
        e.preventDefault();
        const filteredPosts = posts.filter((post) => post.id !== choosedPostID);
        setPosts([...filteredPosts, currentPost]);
        close(ModalTypes.editPost);
      } else {
        e.preventDefault();
        console.log('errored');
        setPostError('You shold write something.');
      }
    }
  };

  return (
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
  );
};

export default EditPost;
