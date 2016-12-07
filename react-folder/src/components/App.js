import React, { Component } from 'react';
import Nav from './Nav'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="childrens">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
