import React, { useRef, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import debounce from "lodash/debounce";

export default function SearchAppBar() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const getMovieRequest = async (searchValue) => {
    const url = `https://wookie.codesubmit.io/movies?q=${searchValue}`;

    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer Wookie2019",
      },
    });
    const responseJson = await response.json();
    if (responseJson.movies.length > 0) {
      setMovies(responseJson.movies);
      navigate("/movies", { state: { searchResult: responseJson.movies } });
    }
  };
  useEffect(() => {
    if (searchValue !== "") {
      getMovieRequest(searchValue);
    } else {
      navigate("/");
    }
  }, [searchValue]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={"sticky"} color="default">
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            to={`/`}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{ textDecoration: "none" }}
          >
            Wookie Movies
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
