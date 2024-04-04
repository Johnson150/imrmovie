// pages/index.tsx
import React, { useState } from 'react';
import MoviesList from './app/components/Movies';
import Navbar from './components/Navbar';
const Home = () => {
  return (
    <div>
      <MoviesList />
    </div>
  );
};

export default Home;

