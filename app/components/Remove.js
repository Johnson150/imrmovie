import React from 'react';

const DeleteMovie = ({ onDelete }) => {
    const handleDelete = () => {
        onDelete();
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteMovie;
