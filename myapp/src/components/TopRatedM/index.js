import React, { useEffect, useState } from "react";
import HeaderPage from "../HeaderPage";
import axios from "axios";

import "./index.css";

function TopRatedMovies() {
  const [topMovies, setMovies] = useState([]);
  useEffect(() => {
    const getTopRatedMovies = async () => {
      const URL =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=61bcc2f159bfca5b3b3a1331e4bfe24e&language=en-US&page=1";
      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
        console.log((response.da))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getTopRatedMovies();
  }, []);
  console.log(topMovies);
  return (
    <div>
      <HeaderPage />
      <div className="TopMovies">
      {topMovies.map((each) => (
        <div key={each.id} className="diveach">
          <ul className="eachsUnOrderList">
            <li className="ImagesPopular">
            <a href={`/movie-details/${each.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${each.poster_path}`}
                alt={each.title}
                className="TopImage"
              />
              </a>
            </li>
            <li className="eachoriginal">{each.original_title}</li>
            <li className="eachoriginal"> Rating: {each.vote_average}</li>
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}

export default TopRatedMovies;
