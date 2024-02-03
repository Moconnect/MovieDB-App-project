// components/MovieSearchForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface MovieSearchFormProps {
  onSearch: (searchTerm: string, movieType: string) => void;
}

const schema = yup.object().shape({
  searchTerm: yup.string().required('Search term is required'),
  movieType: yup.string().oneOf(['movie', 'series']).required('Please select a movie type'),
});

const MovieSearchForm: React.FC<MovieSearchFormProps> = ({ onSearch }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { searchTerm: string; movieType: string }) => {
    console.log('Submitted Data:', data);
    onSearch(data.searchTerm, data.movieType);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Search Term:
        <input type="text" name="searchTerm" ref={register} />
        {errors.searchTerm && <span>{errors.searchTerm.message}</span>}
      </label>

      <label>
        Movie Type:
        <select name="movieType" ref={register}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        {errors.movieType && <span>{errors.movieType.message}</span>}
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
