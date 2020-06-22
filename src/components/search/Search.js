import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const loadAllMovies = () => {
    fetch("http://localhost:5000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Age of Adaline",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  };

  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <React.Fragment>
      <div className="search-wrapper">
        <input type="text" placeholder="Start typing movie name here ..." />
      </div>
      <div className="movies-wrapper">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="single-movie">
              <h2>Location {index+1}</h2>
              <p>{movie["Locations"]}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Search;
