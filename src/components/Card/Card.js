import React from "react";
import PropTypes from "prop-types";

const Card = ({ movie }) => (
  <div className="col-md-4">
    <div className="card animated fadeInUp">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="card-img-top"
        width="100"
      />
      <div className="card-body">
        <h4>{`${movie.Title} (${movie.Year})`}</h4>
        <p>{`Type: ${movie.Type}`}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired,
};

export default Card;
