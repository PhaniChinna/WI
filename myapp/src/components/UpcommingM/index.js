import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderPage from '../HeaderPage';


import "./index.css"

function UpComingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=61bcc2f159bfca5b3b3a1331e4bfe24e&language=en-US&page=1');
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getUpcomingMovies();
  }, []);

  return (
    <div>
      <HeaderPage />
      <div className="UpMovies">
        {upcomingMovies.map((movie) => (
          <div key={movie.id} className="">
            <ul className="eachsUnOrderListType">
              <li>
              <a href={`/movie-details/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="UpImage" />
                </a>
              </li>
              <li className="eachUpcoming">{movie.original_title}</li>
              <li className="eachUpcoming"> Rating: {movie.vote_average}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpComingMovies;
