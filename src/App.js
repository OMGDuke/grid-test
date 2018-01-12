import React, { Component } from 'react';
import squareTypes from './squareTypes'
import Square from './Square/Square';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const {red, blue, green} = squareTypes;
    this.grid = [
      [red, blue, green, green],
      [red, blue, green, green],
      [blue, green, green, green],
      [green, blue, green, red]
    ];
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(row, indexX) {
    return (
      <div key={indexX}>
        {row.map((square, indexY) => <Square key={`${indexX}-${indexY}`} square={square} indexX={indexX} indexY={indexY} />)}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.grid.map(this.renderRow)}
      </div>
    );
  }
}

export default App;
