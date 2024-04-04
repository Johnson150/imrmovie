import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditMoviePage = () => {
    const router = useRouter();
    const { id } = router.query; // Assuming you have movie ID in URL query parameter

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`/api/mongodb/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie');
                }
                const movieData = await response.json();
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie:', error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovie();
        }
    }, [id]);

    const handleSubmit = (updatedMovie) => {
        // Handle editing movie logic here
        console.log('Editing movie:', updatedMovie);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>No movie found</div>;
    }

    return (
        <div>
            <h1>Edit Movie</h1>
            {/* Render your movie edit form here */}
        </div>
    );
};

export default EditMoviePage;
