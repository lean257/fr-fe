import React from "react";
import MovieGrid from "./components/MovieGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import SearchAppBar from "./components/SearchAppBar";
import SearchResult from "./components/SearchResult";

const NotFound = () => {
  return <div>This is not a valid route</div>;
};

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movies" element={<SearchResult />} />
        <Route path="/movies/:movieId" element={<MovieCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
