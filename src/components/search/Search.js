import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllMovies = (movie) => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_MOVIE_SPOTS_API}/api/search`, {
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
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      setMovies([]);
      setLoading(false);
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
          autoFocus="autofocus"
        />
      </div>
      <div className="movies-wrapper">
        {loading ? <h2>Loading ...</h2> : ""}
        {movies.map((movie, index) => {
          return (
            <div key={index} className="single-movie">
              <Link to={"/movie?title=" + movie["Title"]}>
                <h2>{movie["Title"]}</h2>
              </Link>
              <span className="pill">{movie["Release Year"]}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Search;
