import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data = '' }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data);

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate('/course-list/' + input.trim());
    }
  };

  return (
    <div className="mt-6 flex justify-center px-4">
      <form
        onSubmit={onSearchHandler}
        className="flex w-full max-w-2xl"
      >
        <input
          type="text"
          placeholder="Search for courses"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-6 py-3 text-lg border border-gray-300 rounded-l-full rounded-r-none focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-r-full rounded-l-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
