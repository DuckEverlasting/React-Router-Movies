import React, { Component } from "react";
import axios from "axios";

const AddMovie = props => {
  return (
    <form className="add-movie-form" action="" onSubmit={props.postMovie}>
      <p>Add a Movie:</p>
      <input type="text" placeholder="search by title..." value={props.addMovieInput} onChange={props.inputChangeHandler} />
    </form>
  );
};

export default AddMovie;
