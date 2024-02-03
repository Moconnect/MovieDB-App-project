import React from "react";

interface MoviePageProps {
  movie: { title: string; description: string }; // Replace with actual movie details
}

const MoviePage: React.FC<MoviePageProps> = ({ movie }) => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              User Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email Address
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Mobile
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Name
              </span>
              Jamal Rios
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                User Name
              </span>
              jrios1
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Email Address
              </span>
              jrios@icloud.com
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Mobile
              </span>
              582-3X2-6233
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Actions
              </span>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MoviePage;
