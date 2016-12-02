import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
          <Link to={'/'}>Home</Link>
          <Link to={'/signup'}>Signup</Link>
          
      </div>
    );
  }
}

export default App;
