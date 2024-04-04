import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [data, setData] = useState([]);
  const [deletedCount, setDeletedCount] = useState(0);

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
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
