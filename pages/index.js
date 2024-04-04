// pages/index.js

import React from 'react';
import MongoDBComponent from '../app/components/Movies'; // Import MongoDBComponent
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
// Remove one of the default exports named Home
export default function Home({ data }) {
  return (
    <div>
      <h1>IMR movie App</h1>
      <Navbar />
      <Footer />

      <MongoDBComponent data={data} /> {/* Use MongoDBComponent and pass data as props */}
    </div>
  );
}

