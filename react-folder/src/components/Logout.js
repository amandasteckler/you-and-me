import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import logUserOut from '../actions/logUserOut'
import { Row, Col, Button } from 'react-bootstrap'

class Logout extends Component {

  handleYes(event){
    this.props.logUserOut(this.props.currentUserID)
  }

  handleNo(event){
    browserHistory.push('/profile')
  }

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
        <p className="whiteText">Are you sure you want to log out?</p>
        <Button onClick={this.handleYes.bind(this)}>Yes</Button>
        <Button onClick={this.handleNo.bind(this)}>No</Button>
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserOut }, dispatch)
}

// function mapStateToProps(state){
//   return {currentUserID: state.currentUser.id}
// }

export default connect(null, mapDispatchToProps)(Logout)
