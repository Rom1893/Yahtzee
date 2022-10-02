import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
  }

  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.numberWords[this.props.val-1]} fa-5x 
        ${this.props.locked ? "Die-locked" : ""} ${this.props.rolling && "Die-rolling"}`}
        onClick={() => this.props.handleClick(this.props.idx)}
        disabled={this.props.disabled}

      >
      </i>
    );
  }
}

export default Die;
