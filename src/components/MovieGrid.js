import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchData, findMoviesByGenres } from "../utils.js/utils";
import "./MovieGrid.css";
import Slide from "./Slide";

export default function MovieGrid() {
  const [moviesByGenres, setMoviesByGenres] = useState([]);
  const location = useLocation();
  const searchResult = location.state?.searchResult;

  useEffect(() => {
    fetchData(`https://wookie.codesubmit.io/movies`).then((data) => {
      if (data.movies.length > 0) {
        setMoviesByGenres(findMoviesByGenres(data.movies));
      }
    });
  }, []);

  return (
    <div className="all-slides-wrapper">
      {searchResult?.length === 0 && <div>No result found</div>}
      {Object.keys(moviesByGenres).map((category) => (
        <div className="slide-wrapper" key={`${category}`}>
          <h2 className="slide-title">{category}</h2>
          <Slide movies={moviesByGenres[category]} />
        </div>
      ))}
    </div>
  );
}
