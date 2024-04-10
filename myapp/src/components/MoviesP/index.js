import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";

function MoviesData() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const getPopularDataMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=61bcc2f159bfca5b3b3a1331e4bfe24e&language=en-US&page=1`;
      try {
        const response = await axios.get(url);
        setMoviesData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getPopularDataMovie();
  }, []);

  return (
    <div className="MoviesDataContainer">
      {moviesData.map((movie) => (
        <div key={movie.id} className="divMovie">
          <ul className="MoviesUnOrderList">
            <li className="ImagesPopular">
              <a href={`/movie-details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="ImageLi"
                />
              </a>
            </li>
            <li className="Movieoriginal">{movie.original_title}</li>
            <li className="Movieoriginal"> Rating: {movie.vote_average}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MoviesData;
