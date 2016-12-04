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

          {this.props.children}

      </div>
    );
  }
}

export default App;
