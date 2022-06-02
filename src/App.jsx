import React, { Component } from "react";
import MovieList from "./components/movieList/MovieList";
import Home from "./pages/home/Home";
export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
