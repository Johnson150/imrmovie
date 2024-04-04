import React, { useState, useEffect } from 'react';

const MongoDBComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/mongodb'); // Fetch data from your API route
            const newData = await res.json();
            setData(newData);
        };

        fetchData();
    }, []);

    // Check if data is defined and is an array before mapping
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
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MongoDBComponent;
