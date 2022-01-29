import React from "react";
import MovieGrid from "./components/MovieGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movie/:movieId" element={<MovieCard />} />
      </Routes>
    </Router>
  );
}

export default App;
