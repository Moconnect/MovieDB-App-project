// App.tsx
import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import useMoviesQuery from './Hooks/useMoviesQuery';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, isError } = useMoviesQuery(searchTerm);

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <h1>MovieDB App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data</p>}

      {data && data.Search ? (
        <ul>
          {data.Search.map((movie: any) => (
            <li key={movie.imdbID}>
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
              <p>Type: {movie.Type}</p>
              <button onClick={() => console.log('View Details', movie)}>View Details</button>
              {/* Add the image here if available */}
              {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
            </li>
          ))}
        </ul>
      ) : null}

      <ReactQueryDevtools />
    </div>
  );
};

export default App;
