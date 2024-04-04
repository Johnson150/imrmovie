import React, { useState } from 'react';
import AddEntryForm from '../app/components/AddEntryForm';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

const AddMovies = () => {
  // Define handleAddEntry function to handle adding new entries
  const handleAddEntry = (newEntry) => {
    // Handle adding the new entry to your data store or perform any necessary actions
    console.log('New entry added:', newEntry);
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <Navbar />
      {/* Pass handleAddEntry function as a prop to AddEntryForm */}
      <AddEntryForm onAddEntry={handleAddEntry} />
      <Footer />
    </div>
  );
};

export default AddMovies;
