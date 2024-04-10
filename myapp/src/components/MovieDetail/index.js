import React, { useState, useEffect } from "react";
import HeaderPage from "../HeaderPage";

import axios from "axios";

import "./index.css";

function MovieDetails({ match }) {
  const [movie, setMovie] = useState({});
  const movieId = match.params.id;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=61bcc2f159bfca5b3b3a1331e4bfe24e&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDay = date.toLocaleDateString("en", { weekday: "long" });

    return { year, month, day, weekDay };
  };

  return (
    <>
      <div className="MovieDetailPAge">
        <HeaderPage />
      </div>
      <div className="ListCard">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="Mov-del-image"
        />
        <div className="">
          <h1 className="MovieTitle">{movie.title}</h1>
          <p className="MovieTitleLst">Rating {movie.vote_average}</p>
          <p className="MovieTitleLst">
            Release Date :{formatDate(movie.release_date).weekDay},{" "}
            {formatDate(movie.release_date).month}/
            {formatDate(movie.release_date).day}/
            {formatDate(movie.release_date).year}
          </p>
        </div>
      </div>

      <div className="ListCard1">
        <h1 className="MovieTitle1">
          {" "}
          OverView : <br />
          {movie.overview}
        </h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className="LeftImagge"
        />
      </div>
    </>
  );
}

export default MovieDetails;
