// MovieDetails.tsx
import React from 'react';

interface MovieDetailsProps {
  movie: {
    Title: string;
    Poster?: string;
    Year: string;
    Type: string;
    Plot: string;
  };
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  return (
    <div className="mt-4">
      <h2>{movie.Title}</h2>
      {movie.Poster && (
        <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ width: '200px', height: '300px' }} />
      )}
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>{movie.Plot}</p>
      <button onClick={onClose} className="bg-gray-300 px-2 py-1 rounded">
        Close Details
      </button>
    </div>
  );
};

export default MovieDetails;
