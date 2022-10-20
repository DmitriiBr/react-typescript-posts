import React from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <h1 className="text-center font-bold font-mono text-3xl">
          Hello world
        </h1>
        <Posts />
      </div>
    </>
  );
}

export default App;
