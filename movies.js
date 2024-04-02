// Import the necessary modules from 'next' and '../mongodb/mongo'
import { NextPage, GetServerSideProps } from 'next';
import { getAllMovies } from '../mongodb/mongo';

// Define the Movie type using type
type Movie = {
  title: string;
  actors: string[];
  releaseYear: number;
};

// Define the Props type for the component
type Props = {
  movies: Movie[];
};

// Define the MoviesPage component as a NextPage<Props>
const MoviesPage: NextPage<Props> = ({ movies }) => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Actors: {movie.actors.join(', ')}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define the getServerSideProps function
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // Fetch all movies using the getAllMovies function from '../mongodb/mongo'
  const movies = await getAllMovies();
  return { props: { movies } };
};

// Export the MoviesPage component as default
export default MoviesPage;
