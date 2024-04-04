import React, { useState } from 'react';

const AddMoviePage = () => {
    const [title, setTitle] = useState('');
    const [actors, setActors] = useState('');
    const [releaseYear, setReleaseYear] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movie = { title, actors: actors.split(','), release_year: releaseYear };
        try {
            const response = await fetch('/api/addmovie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movie),
            });

            if (!response.ok) {
                throw new Error('Failed to add movie');
            }

            console.log('Movie added successfully:', movie);
            // Clear the form fields after successful submission
            setTitle('');
            setActors('');
            setReleaseYear('');
        } catch (error) {
            console.error('Error adding movie:', error.message);
        }
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Actors (comma-separated)" value={actors} onChange={(e) => setActors(e.target.value)} required />
                <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMoviePage;
