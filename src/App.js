import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.items = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(row, indexX) {
    return (
      <div>
        {row.map((square, indexY) => this.renderSquare(square, indexX, indexY))}
      </div>
    )
  }

  renderSquare(square, indexX, indexY) {
    return (<span key={`${indexX}-${indexY}`} className="square">{indexX}, {indexY}</span>)
  }

  render() {
    return (
      <div className="App">
        {this.items.map(this.renderRow)}
      </div>
    );
  }
}

export default App;
