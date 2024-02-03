// useMoviesQuery.tsx
import { useQuery } from 'react-query';
import axios from 'axios';

const API_KEY = 'f1b504e9';  // Replace with your actual API key

const fetchMovies = async (searchTerm: string): Promise<any> => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
  return response.data;
};

const useMoviesQuery = (searchTerm: string) => {
  return useQuery(['movies', searchTerm], () => fetchMovies(searchTerm));
};

export default useMoviesQuery;
