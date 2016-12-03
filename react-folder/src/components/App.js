import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <p><Link to={'/'}>Home</Link></p>
          <p><Link to={'/signup'}>Signup</Link></p>
          <p><Link to={'/login'}>Login</Link></p>

          {this.props.children}

      </div>
    );
  }
}

export default App;
