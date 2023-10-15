import React from 'react';
import Movie from './Movie';

function Genre(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Movie title={props.movieTitle1} year="2022" />
      <Movie title={props.movieTitle2} year="2021" />
    </div>
  );
}

export default Genre;