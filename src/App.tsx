import React from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import SearchMenu from './components/SearchMenu';
import SortMenu from './components/SortMenu';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 container flex justify-center items-center flex-col max-w-3xl m-auto">
        <h1 className="text-center font-bold font-mono text-3xl">
          Hello world
        </h1>
        <SearchMenu />
        <SortMenu />
        <Posts />
      </div>
    </>
  );
}

export default App;
