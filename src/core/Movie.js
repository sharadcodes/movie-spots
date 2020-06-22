import React, { useState, useEffect } from "react";
import queryString from "query-string";
import Base from "./Base";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const [movie_list, setMovielist] = useState([]);
  const [meta, setMeta] = useState({});

  const loadAllMovies = (title) => {
    fetch(`http://localhost:5000/api/search/single?title=${title}`)
      .then((res) => res.json())
      .then((data) => {
        setMovielist(data);
        setMeta(data[0]);
      });
  };

  useEffect(() => {
    let url = props.location.search;
    let params = queryString.parse(url);
    loadAllMovies(params.title);
  }, [props.location.search]);

  return (
    <Base>
      <div className="movies-wrapper">
        <Link to="/"><span className="btn">&larr; Go Back</span></Link>
        <div className="meta">
          <h2>{meta["Title"]}</h2>
          <span className="pill">{meta["Release Year"]}</span>
          <h4>Director</h4>
          <p>{meta["Director"]}</p>
          <h4>Produced by</h4>
          <p>{meta["Production Company"]}</p>
          <h4>Distributor</h4>
          <p>{meta["Distributor"]}</p>
          <h4>Actors</h4>
          <p>
            {meta["Actor 1"] !== "" ? meta["Actor 1"] : ""}
            {meta["Actor 2"] !== "" ? "," + meta["Actor 2"] : ""}
            {meta["Actor 3"] !== "" ? "," + meta["Actor 3"] : ""}
          </p>
        </div>
        <div className="location-wrapper">
          <h4>Shooting locations</h4>
          {movie_list.map((movie, index) => {
            return (
              <div key={index} className="location">
                <p>› {movie["Locations"]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Movie;
