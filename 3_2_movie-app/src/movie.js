import React from 'react';

function Movie(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default Movie;