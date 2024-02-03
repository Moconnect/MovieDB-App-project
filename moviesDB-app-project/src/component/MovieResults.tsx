import React from 'react';

interface SearchResultsProps {
  results: Array<{ title: string; id: string }>;
  onItemClick: (id: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onItemClick }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id} onClick={() => onItemClick(result.id)}>
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
