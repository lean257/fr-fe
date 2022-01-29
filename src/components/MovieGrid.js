import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import { findMoviesByGenres } from "../utils.js/utils";
import "./MovieGrid.css";
export default function MovieGrid() {
  // const [movies, setMovies] = useState();
  // const [moviesByGenres, setMoviesByGenres] = useState();
  // useEffect(() => {
  //   setMovies(data.movies);
  //   setMoviesByGenres(sortMoviesByGenres(data.movies));
  // }, [data]);
  const moviesByGenres = findMoviesByGenres(data.movies);

  return (
    <div className="all-slides-wrapper">
      {Object.keys(moviesByGenres).map((category) => (
        <div className="slide-wrapper" key={`${category}`}>
          <h2 className="slide-title">{category}</h2>
          <div className="all-img-wrapper">
            {moviesByGenres[category].map((cardItem) => (
              <Link
                to={`/movie/${cardItem.id}`}
                state={{ cardItem }}
                className="card-wrapper"
                key={cardItem.id}
              >
                <img
                  src={cardItem.poster}
                  className="card-image"
                  alt={cardItem.title}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
