import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export default function SearchAppBar() {
  const onChange = (event) => {
    const { name, value } = event?.target;
    const params = new URLSearchParams({ [name]: value });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{ color: "#424242" }}
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
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
