import React, { Component } from "react";
import MovieCard from "../movieCard/MovieCard";
import "./movieList.css";
import { movies } from "../../dummyData";
export default class MovieList extends Component {
  render() {
    return (
      <div className="movieListContainer">
        {movies.map((movie) => (
          <MovieCard
            posterUrl={movie.posterUrl}
            title={movie.title}
            description={movie.description}
            rating={movie.rating}
          />
        ))}
      </div>
    );
  }
}
