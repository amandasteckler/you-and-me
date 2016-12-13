import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Nav from './Nav'
import FastLogin from './FastLogin'
import $ from 'jquery'
// import '../App.css';

class App extends Component {
  // componentDidMount(){
  //   if (this.props.currentUser.loggedIn === true) {
  //     console.log("logged in")
  //   } else {
  //     $(document).ready(()=>{
  //       let x = $('body').className
  //       console.log(x + " is the body className")
  //       debugger
  //     })
  //     console.log("not logged in")
  //   }
  // }
  // bg(){
  //   if (this.props.currentUser.loggedIn === true) {
  //     console.log("logged in")
  //   } else {
  //     $(document).ready(()=>{
  //       $('body').className = "bg-welcome"
  //     })
  //     console.log("not logged in")
  //   }
  // }

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
