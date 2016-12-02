import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export default function auth(ConnectedComponent){
  class AuthorizedComponent extends Component {
    componentWillMount(){
      if(!this.props.current_user){
        browserHistory.push('/')
      }
    }
    componentWillReceiveProps(){
      if(!this.props.current_user){
        browserHistory.push('/')
      }
    }
    render(){
      return(<ConnectedComponent {...this.props} />)
    }
  }
  function mapStateToProps(state){
    return { current_user: state.current_user, browserHistory: browserHistory }
  }
  return connect(mapStateToProps)(AuthorizedComponent)
}
