import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditEntryForm from './EditEntryForm';

const Movies = () => {
  const [data, setData] = useState([]);
  const [deletedCount, setDeletedCount] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store the selected movie for editing
  const [isEditFormVisible, setIsEditFormVisible] = useState(false); // State to manage edit form visibility

  useEffect(() => {
    fetchData();
  }, [deletedCount]); // Re-fetch data when a deletion occurs

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/mongodb');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onDeleteEntry = async (id) => {
    try {
      await axios.delete(`/api/deleteEntry/${id}`);
      setDeletedCount((prevCount) => prevCount + 1); // Trigger re-fetch after deletion
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  // Function to handle editing a movie
  const handleEditMovie = (movie) => {
    setSelectedMovie(movie); // Set the selected movie for editing
    setIsEditFormVisible(true); // Show the edit form
  };

  // Function to handle saving the edited movie
  const handleSaveEditedMovie = async (updatedEntry) => {
    try {
      await axios.put(`/api/editEntry/${updatedEntry._id}`, updatedEntry);
      // You can handle success or error response here
      // For example, display a message or update the UI
      console.log('Movie updated successfully:', updatedEntry);
      // Refresh the data after saving the updated entry
      fetchData();
      // Close the edit form
      handleCancelEdit();
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  // Function to handle canceling the edit
  const handleCancelEdit = () => {
    setSelectedMovie(null); // Clear the selected movie
    setIsEditFormVisible(false); // Hide the edit form
  };

  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>MongoDB Data:</h1>
      <ul>
        {data.map((movie, index) => (
          <li key={index}>
            <strong>Title:</strong> {movie.title}<br />
            <strong>Actors:</strong> {movie.actors.join(', ')}<br />
            <strong>Release Year:</strong> {movie.release_year}<br />
            <button onClick={() => onDeleteEntry(movie._id)}>Delete</button>
            {/* Use handleEditMovie function when the edit button is clicked */}
            <button onClick={() => handleEditMovie(movie)}>Edit</button>
            <br />
          </li>
        ))}
      </ul>
      {/* Conditionally render the edit form */}
      {isEditFormVisible && selectedMovie && (
        <EditEntryForm
          entry={selectedMovie}
          onSave={handleSaveEditedMovie}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default Movies;
