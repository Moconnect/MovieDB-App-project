// MovieSearch.tsx
import React, { useState } from 'react';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=f1b504e9`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
        setSelectedMovie(null); // Reset selectedMovie when performing a new search
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleViewDetails = async (imdbID) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=f1b504e9`);
      const data = await response.json();

      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>

      {movies.length > 0 && (
        <table className="mt-4">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.imdbID}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Type}</td>
                <td>
                  <button onClick={() => handleViewDetails(movie.imdbID)} className="bg-gray-300 px-2 py-1 rounded">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedMovie && (
        <div className="mt-4">
          <h2>{selectedMovie.Title}</h2>
          {selectedMovie.Poster && (
            <img src={selectedMovie.Poster} alt={`${selectedMovie.Title} Poster`} style={{ width: '200px', height: '300px' }} />
          )}
          <p>Year: {selectedMovie.Year}</p>
          <p>Type: {selectedMovie.Type}</p>
          <p>{selectedMovie.Plot}</p>
          <button onClick={() => setSelectedMovie(null)} className="bg-gray-300 px-2 py-1 rounded">
            Close Details
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
