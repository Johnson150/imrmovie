import { useState } from 'react';
import MovieForm from '../components/MovieForm';

const AddMoviePage = () => {
    const handleSubmit = (movie) => {
        // Handle adding movie logic here
        console.log('Adding movie:', movie);
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <MovieForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AddMoviePage;
