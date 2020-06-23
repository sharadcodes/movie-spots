import React, { useState, useEffect } from "react";
import queryString from "query-string";
import Base from "./Base";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const [locations, setLocations] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  const loadAllMovies = (title) => {
    fetch(`${process.env.MOVIE_SPOTS_API}/api/search/single?title=${title}`)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data[0]);
        setLocations(data.map(item => item['Locations']).filter((value, index, self) => self.indexOf(value) === index));
        setLoading(false);
      });
  };

  useEffect(() => {
    let url = props.location.search;
    let params = queryString.parse(url);
    loadAllMovies(params.title);
  }, [props.location.search]);

  const info = () => {
    return (
      <React.Fragment>
        <div className="meta">
          <h2>{meta["Title"]}</h2>
          <span className="pill">{meta["Release Year"]}</span>
          <div className="location-wrapper">
          <h4>Shooting locations</h4>
          {locations.map((lcn, index) => {
            return (
              <div key={index} className="location">
                <p>{lcn.length !== 0 ? "› " + lcn : ""}</p>
              </div>
            );
          })}
          </div>
          <h4>Actors</h4>
          <p>
            {meta["Actor 1"] !== "" ? meta["Actor 1"] : ""}
            {meta["Actor 2"] !== "" ? ", " + meta["Actor 2"] : ""}
            {meta["Actor 3"] !== "" ? ", " + meta["Actor 3"] : ""}
          </p>
          <h4>Director</h4>
          <p>{meta["Director"] !== "" ? meta["Director"] : "No data available"}</p>
          <h4>Produced by</h4>
          <p>{meta["Production Company"] !== "" ? meta["Production Company"] : "No data available"}</p>
          <h4>Distributor</h4>
          <p>{meta["Distributor"] !== "" ? meta["Distributor"] : "No data available"}</p>
        </div>
      </React.Fragment>
    );
  };

  return (
    <Base>
      <div className="movies-wrapper">
        <Link to="/">
          <span className="btn">&larr; Go Back</span>
        </Link>
        {loading ? <h3>Loading ...</h3> : info()}
      </div>
    </Base>
  );
};

export default Movie;
