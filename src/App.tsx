import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './routes/indes';

function App() {
  return (
    <div className={`relative`}>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
