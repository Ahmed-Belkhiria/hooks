import React, { Component } from "react";
import "./movieCard.css";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="image">
          <img src={this.props.posterUrl} alt="" />
        </div>
        <div className="text">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <h4>{this.props.rating}</h4>
        </div>
      </div>
    );
  }
}
