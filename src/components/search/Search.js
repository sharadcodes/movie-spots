import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const loadAllMovies = (movie) => {
    fetch("http://localhost:5000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: movie,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data = data.filter(
          (value, index, self) =>
            self.map((i) => i.Title).indexOf(value.Title) === index
        );
        setMovies(data);
      });
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      setMovies([]);
    } else {
      loadAllMovies(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Start typing movie name ..."
          onChange={handleChange}
        />
      </div>
      <div className="movies-wrapper">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="single-movie">
              <h2>{movie["Title"]}</h2>
              <span className="pill">{movie["Release Year"]}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Search;
