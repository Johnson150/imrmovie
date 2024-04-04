// ../app/components/Movies.js

import React from 'react';

const DeleteEntry = ({ data, onDeleteEntry }) => {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <strong>Title:</strong> {item.title}<br />
            <strong>Actors:</strong> {item.actors.join(', ')}<br />
            <strong>Release Year:</strong> {item.release_year}<br />
            <button onClick={() => onDeleteEntry(item._id)}>Delete</button>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteEntry;
