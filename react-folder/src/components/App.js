import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import Board from './Board.js'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Board />


        <div className="childrens">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
