import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  render() {
    const indexX = this.props.indexX;
    const indexY = this.props.indexY;
    return (
      <span className={`square ${this.props.square.type}`}>
        <p>{this.props.square.type}</p>
        <p>{indexX}, {indexY}</p>
      </span>
    );
  }
}

export default Square;
