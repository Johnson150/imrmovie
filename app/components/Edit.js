import { useState } from 'react';
import { useRouter } from 'next/router';
import MovieForm from '../components/MovieForm';

const EditMoviePage = () => {
    const router = useRouter();
    const { id } = router.query; // Assuming you have movie ID in URL query parameter

    // Fetch movie details using movie ID and set initial movie state
    const initialMovie = {
        title: 'Example Movie',
        actors: ['Actor 1', 'Actor 2'],
        releaseYear: 2022,
    };

    const handleSubmit = (movie) => {
        // Handle editing movie logic here
        console.log('Editing movie:', movie);
    };

    return (
        <div>
            <h1>Edit Movie</h1>
            <MovieForm onSubmit={handleSubmit} initialMovie={initialMovie} />
        </div>
    );
};

export default EditMoviePage;
