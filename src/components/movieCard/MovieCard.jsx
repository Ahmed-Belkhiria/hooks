import React, { Component } from "react";
import "./movieCard.css";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

export default class MovieCard extends Component {
  state = {
    isHovered: false,
  };
  render() {
    return (
      <div
        className="movieCard"
        style={{
          left: this.props.movie.id * 225 - 50 + this.props.movie.id * 2.5,
        }}
        onMouseEnter={() => {
          this.state.isHovered = true;
        }}
        onMouseLeave={() => (this.state.isHovered = false)}
      >
        <img src={this.props.movie.posterUrl} alt="" className="movieCardImg" />
        <div className="movieCardInfo">
          <div className="movieCardTitle">
            {this.props.movie.title}
          </div>
          <div className="movieCardTopInfo">
            <span>{this.props.movie.duration}</span>
            <span className="movieCardTopInfoLimit">
              {this.props.movie.rating}
            </span>
            <span>1999</span>
          </div>

          <div className="movieCardTopInfoDesc">
            {this.props.movie.description}
          </div>
          <div className="movieCardTopInfoGenre">Action</div>
        </div>
      </div>
    );
  }
}
