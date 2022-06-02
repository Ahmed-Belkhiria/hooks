import React, { Component, useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import "./movieList.css";
import { movies } from "../../dummyData";
const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filter, setFilter] = useState("title");

  useEffect(() => {
    console.log(filter);
    if (filter === "rating") {
      setFilteredMovies(
        filteredMovies.sort((a, b) => a.title.localeCompare(b.title))
      );
    }
    if (filter === "title") {
      setFilteredMovies(
        filteredMovies.sort((a, b) => a.rating.localeCompare(b.rating))
      );
    }
  }, [filter]);
  return (
    <div className="movieListContainer">
      <span className="movieListHeader">Continue to watch</span>
      {true && (
        <div className="movieListFilter">
          {/* <span>{type === "movie" ? "Movies" : "Series"}</span> */}
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="filter"
            id="filter"
            className="filter"
          >
            <option>Filter</option>
            <option value="title">title</option>
            <option value="rating">rating</option>
          </select>
        </div>
      )}
      <div className="movieListWrapper">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
