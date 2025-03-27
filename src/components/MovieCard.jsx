import React from 'react';
import { Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#141414] rounded-lg overflow-hidden shadow-lg p-4">
      {/* Movie Poster */}
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt={movie.title} 
        className="w-full h-[250px] object-cover rounded-md"
      />

      {/* Movie Details */}
      <div className="mt-3 text-white">
        <h2 className="text-lg font-bold truncate">{movie.title}</h2>

        {/* Rating & Genre */}
        <div className="flex items-center text-gray-400 text-sm mt-1">
          <Star className="text-yellow-500 w-4 h-4 mr-1" />
          <span className="font-semibold">{movie.vote_average.toFixed(1)}</span>
          <span className="mx-2">•</span>
          <span>{movie.genre || "Action"}</span>
          <span className="mx-2">•</span>
          <span>Movie</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
