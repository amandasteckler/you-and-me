import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './Nav'
import { Grid } from 'react-bootstrap'
// import '../App.css';

class App extends Component {

  bg(){
    if (this.props.currentUser.loggedIn === true) {
      
    } else {

    }
  }

  render() {
    return (
        <Grid>
          <Nav />
          <div className="childrens">
            {this.props.children}
          </div>
        </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(App)
