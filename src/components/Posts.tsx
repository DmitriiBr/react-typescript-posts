import React, { useContext, useEffect, useMemo, useState } from 'react';
import PostItem from './PostItem';
import Modal from './Modal';
import CreatePost from './CreatePost';
import { IPost } from '../data/types';
import DeletePost from './DeletePost';
import { ModalTypes } from '../context/ModalContext';
import { PostsContext } from '../context/PostsContext';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import EditPost from './EditPost';
import { useFetch } from '../hooks/useFetch';

interface PostsProps {
  posts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { getAllPosts } = useContext(PostsContext);
  const [fetchPostsData, loadingPosts, errorPosts] = useFetch(getAllPosts);
  const [pagesTotal, setPagesTotal] = useState(10);
  const [pagesLimit, setPagesLimit] = useState(10);
  const [page, setPage] = useState(1);

  const pagesArray = useMemo(() => {
    const arr = [];

    for (let i = 0; i < pagesTotal; i++) {
      arr.push(i + 1);
    }

    return arr;
  }, [pagesTotal]);

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <>
      <Modal
        title="Create new post:"
        modalType={ModalTypes.createPost}
      >
        <CreatePost />
      </Modal>
      <Modal
        title="Do you really want to delete this post?"
        modalType={ModalTypes.deletePost}
      >
        <DeletePost />
      </Modal>
      <Modal
        title="Post editing"
        modalType={ModalTypes.editPost}
      >
        <EditPost />
      </Modal>
      {errorPosts && <Error>{errorPosts}</Error>}
      {loadingPosts ? (
        <Loader />
      ) : (
        <ul className="mt-3">
          {posts.map((post, index) => (
            <PostItem
              post={post}
              index={index}
              key={post.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
