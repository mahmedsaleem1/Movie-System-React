import React from 'react';

const Search = ({ searchTerm, setSearchTerm, fetchMovies }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex items-center bg-gray-800 p-2 rounded-lg">
        <img src="Vector.svg" alt="search" className="w-6 h-6 mr-2" />
        <input
          type="text"
          placeholder="Search Your Movies Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-white outline-none p-2 w-64"
        />
        <button 
          onClick={() => fetchMovies(searchTerm)} // 🔹 Trigger search manually
          className="ml-2 bg-blue-500 px-4 py-2 text-white rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;