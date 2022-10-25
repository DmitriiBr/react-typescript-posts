import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { routes } from './routes';

function App() {
  return (
    <div className={`relative`}>
      <Navbar />
      <div className="pt-20 container flex justify-center items-center flex-col max-w-3xl m-auto">
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
