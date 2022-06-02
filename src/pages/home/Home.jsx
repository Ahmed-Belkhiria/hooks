import React from "react";
import MovieList from "../../components/movieList/MovieList";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <MovieList />
    </div>
  );
};

export default Home;
