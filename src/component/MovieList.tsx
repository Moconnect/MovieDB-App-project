// components/MovieList.tsx
import React from 'react';

interface Movie {
  Title: string;
  Year: string;
  // Add more fields as needed
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      <h2>Movies:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.Title}>
            <strong>{movie.Title}</strong> ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
