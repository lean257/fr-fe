import React from "react";
import "./MovieCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useLocation } from "react-router-dom";

export default function MovieCard() {
  const location = useLocation();
  const movie = location.state.cardItem;

  return (
    // had to do inline styling to override mui default style
    <Card className="card" style={{ border: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={movie.poster}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box className="title">
            <Typography component="div" variant="h5" gutterBottom>
              {`${movie.title} (${movie.imdb_rating})`}
            </Typography>
            <Rating name="read-only" value={movie.imdb_rating / 2} readOnly />
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            {`${new Date(movie.released_on).getFullYear()} |
                ${movie.length} |
                ${movie.director}`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            Cast: {movie.cast.join(", ")}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Movie Description {movie.overview}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
