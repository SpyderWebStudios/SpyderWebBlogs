import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Pagination from "./Pagination";

// //  import { Route, Switch } from "react-router";
// <div style={{ width: '100%' }}>

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SearchBar />
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.white"
      >
        <Box p={1} bgcolor="white.300">
          <Card />
        </Box>
        <Box p={1} bgcolor="white.300">
          <Card />
        </Box>
        <Box p={1} bgcolor="white.300">
          <Card />
        </Box>
      </Box>
    </div>
  );
}
