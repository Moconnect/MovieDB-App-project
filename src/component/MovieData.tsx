// movieDataFetcher.ts
import axios from 'axios';

const API_KEY = 'f1b504e9';  // Replace with your actual API key

const MovieData = async (searchTerm: string): Promise<any> => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};

export default MovieData;
