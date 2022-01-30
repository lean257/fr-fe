import React from "react";
import { Link } from "react-router-dom";
import "./Slide.css";

export default function Slide({ movies }) {
  return (
    <div className="all-img-wrapper">
      {movies.map((cardItem) => (
        <Link
          to={`/movies/${cardItem.id}`}
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
  );
}
