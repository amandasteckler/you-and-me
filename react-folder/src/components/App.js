import React, { Component } from 'react';
import { Link } from 'react-router'
import '../App.css';
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <div className="youandme">✏️ You and Me ✏️</div>
          <p className="navbar"><Link className="nav" to={'/'}>Home</Link>
          <Link className="nav" to={'/signup'}>Signup</Link>
          <Link className="nav" to={'/login'}>Login</Link></p>

          <div className="childrens">
          {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
