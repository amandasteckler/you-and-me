import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import logUserOut from '../actions/logUserOut'

class Logout extends Component {

  handleYes(event){
    this.props.logUserOut(this.props.currentUserID)
  }

  handleNo(event){
    browserHistory.push('/profile')
  }

  render() {
    return (
      <div>
        <p>Are you sure you want to log out?</p>
        <button onClick={this.handleYes.bind(this)}>Yes</button>
        <button onClick={this.handleNo.bind(this)}>No</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserOut }, dispatch)
}

function mapStateToProps(state){
  return {currentUserID: state.currentUser.id}
}

export default connect(null, mapDispatchToProps)(Logout)
