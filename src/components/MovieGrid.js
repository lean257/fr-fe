import React, { useState, useEffect } from "react";
import { data } from "./data";
import { fetchData, findMoviesByGenres } from "../utils.js/utils";
import "./MovieGrid.css";
import Slide from "./Slide";

export default function MovieGrid() {
  // const [movies, setMovies] = useState();
  // const [moviesByGenres, setMoviesByGenres] = useState();

  // useEffect(() => {
  //   fetchData(`https://wookie.codesubmit.io/movies`)
  //   .then(data => {
  //     setMovies(data.movies);
  //     setMoviesByGenres(sortMoviesByGenres(data.movies));
  //   })
  // }, []);

  const moviesByGenres = findMoviesByGenres(data.movies);

  return (
    <div className="all-slides-wrapper">
      {Object.keys(moviesByGenres).map((category) => (
        <div className="slide-wrapper" key={`${category}`}>
          <h2 className="slide-title">{category}</h2>
          <Slide movies={moviesByGenres[category]} />
        </div>
      ))}
    </div>
  );
}
