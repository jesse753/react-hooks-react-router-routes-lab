import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Page</h1>
  movies.map((movies) => (
    <div key={movies.title}>
      <h3>Title: {movies.title}</h3>
      <p>Time: {movies.time} minutes</p>
      <p>Genres:</p>
      <ul>
        {movies.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  ))</div>;
}

export default Movies;
