import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidUpdate(prevProps, prevState){
    if(this.props.match.params.id !== prevProps.match.params.id){
      this.fetchMovie(this.props.match.params.id);
    }
  }

  saveMovie = () => {
    this.props.addToSavedList(this.state.movie)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
        saveMovie={this.saveMovie}
      />
    );
  }
}
