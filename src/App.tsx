import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import SearchMenu from './components/SearchMenu';
import SortMenu from './components/SortMenu';
import { ModalContext } from './context/ModalContext';
import { PostsContext } from './context/PostsContext';

function App() {
  const { posts, setPosts } = useContext(PostsContext);
  const { open } = useContext(ModalContext);

  return (
    <div className={`relative`}>
      <Navbar />
      <div className="pt-20 container flex justify-center items-center flex-col max-w-3xl m-auto">
        <h1 className="text-center font-bold font-mono text-3xl">
          Hello world
        </h1>
        <SearchMenu />
        <SortMenu
          data={['body', 'title']}
          state={posts}
          setState={setPosts}
        />
        <Posts />
        <button
          className="fixed right-5 bottom-5 border
         border-gray-500 py-2 px-2 bg-green-300 rounded 
         hover:bg-green-500 hover:text-white transition-all"
          onClick={open}
        >
          New post
        </button>
      </div>
    </div>
  );
}

export default App;
