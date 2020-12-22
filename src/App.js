import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Pagination from "./Pagination";
// //  import { Route, Switch } from "react-router";

const useStyles = makeStyles({});
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SearchBar />
      <Card />
    </div>
  );
}
