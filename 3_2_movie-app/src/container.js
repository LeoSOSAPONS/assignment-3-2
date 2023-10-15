import React from "react";
import Genre from "./Genre";

const containerStyle = {
  textAlign: "center",
  backgroundColor: "#f0f0f0",
  padding: "20px",
};

function Container() {
  return <div style={containerStyle}>{/* ... */}</div>;
}

function Container() {
  return (
    <div>
      <h1>Movie App</h1>
      <Genre
        name="Comedy"
        description="Funny Movies"
        movieTitle1="Movie 1"
        movieTitle2="Movie 2"
      />
      <Genre
        name="Action"
        description="Action Packed"
        movieTitle1="Movie 3"
        movieTitle2="Movie 4"
      />
    </div>
  );
}

export default Container;
