import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import AddMovie from "./Movies/AddMovie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      addMovieInput: ""
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (savedList.includes(movie)) return;
    savedList.push(movie);
    this.setState({ savedList });
  };

  inputChangeHandler = ev => {
    this.setState({
      addMovieInput: ev.target.value
    });
  };

  // postMovie = ev => {
  //   ev.preventDefault();
  //   const title = this.state.addMovieInput;
  //   this.setState({
  //     addMovieInput: ""
  //   })
  //   axios
  //     .post(
  //       "http://localhost:5000/api/movies/", {})
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <AddMovie
          addMovieInput={this.state.addMovieInput}
          inputChangeHandler={this.inputChangeHandler}
          postMovie={this.postMovie}
        />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
