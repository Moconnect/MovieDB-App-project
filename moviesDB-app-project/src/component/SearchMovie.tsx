import React from "react";
import { useForm, Controller, useFormContext, SubmitHandler} from "react-hook-form";
import { ValidationSchema, FormData } from "../type/ValidationSchema";
import MovieData from './MovieData'; // Import MovieDataFetcher component




const SearchMovie = () => {
  const { handleSubmit, control, setError, clearErrors, getValues} = useFormContext();

  const onSubmit: SubmitHandler<FormData>= async (data: FormData) => {
    console.log('Search Term:', data.searchTerm);
    // You can perform additional logic here before logging the search term

    // Example of using setError to show a validation error
    if (data.searchTerm === 'invalid') {
      setError('searchTerm', {
        type: 'manual',
        message: 'Invalid search term',
      });
    } else {
      // Clear the error if the search term is valid
      clearErrors('searchTerm');
    }
  };


  return (
    <div>
      <header className="py-10">
        <div className="container mx-auto  text-center ">
          <h1 className="text-3xl font-bold ">Home</h1>
          <p className="text-lg font-medium">
            Search File / movies / series / episode
          </p>
        </div>
      </header>
      <main className="py-10">
        <div className="container mx-auto">
          {/* Wrap the form with useFormProvider */}
          <form className="rounded-lg bg-white p-10 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex items-center">
              <Controller
                name="searchTerm"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full rounded-lg border border-gray-400 p-2"
                    placeholder="Search ..."
                  />
                )}
              />
              <button type="submit" className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
                Search
              </button>
            </div>
            {/* Other form elements */}
          </form>

          {/* Include MovieDataFetcher directly in SearchMovie */}
          <MovieData searchTerm={getValues('searchTerm')}/>
        </div>
      </main>
    </div>
  );
};

export default SearchMovie;
