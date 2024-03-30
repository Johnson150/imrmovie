
const MoviesList = ({ movies }) => {
    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h3>{movie.title}</h3>
                        <p>Actors: {movie.actors.join(', ')}</p>
                        <p>Release Year: {movie.releaseYear}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
