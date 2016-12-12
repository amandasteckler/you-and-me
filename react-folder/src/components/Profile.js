import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import boardRequest from '../actions/boardRequest'
// import boardDelete from '../actions/boardDelete'
import createBoard from '../actions/createBoard'
import deleteUserAccount from '../actions/deleteUserAccount'
// import auth from '../../lib/auth'

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      otherUserEmail: ""
    }
  }

  handleOnClick(event) {
    event.preventDefault();
    this.props.boardRequest(event.target.attributes.value.value);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  handleOtherUserChange(event) {
    this.setState({otherUserEmail: event.target.value})
  }

  handleCreate(event) {
    event.preventDefault();
    // passing in state, which is just title, as well as current user id
    this.props.createBoard(this.state.title, this.state.otherUserEmail, event.target.attributes.value.value)
    this.setState({title: '', otherUserEmail: ''})
  }

  handleDeleteAccount(event) {
    event.preventDefault();
    this.props.deleteUserAccount(event.target.attributes.value.value)

  }

  render(){
    let boards = this.props.boards.map((board) => {

      return (<Col className="borderBottomAccent lightBox spaceBottomS spaceTopS">
        <h3><Link onClick={this.handleOnClick.bind(this)} value={board.id}>{board.title}</Link></h3>
      </Col>)
    })

    //CREATE NEW BOARD
    // <form onSubmit={this.handleCreate.bind(this)} value={this.props.currentUser.id}>
    //   <label>Create New Board: </label>
    //   <input type="text" placeholder="Board Title" onChange={this.handleTitleChange.bind(this)} value={this.state.title} />
    //   <input type="text" placeholder="Other User's Email" onChange={this.handleOtherUserChange.bind(this)} value={this.state.otherUserEmail} />
    //   <input type="submit" value="Create!" />
    // </form>


    //DELETE ACCOUNT Button
    // <p>Delete your Account</p>
    //   <button onClick={this.handleDeleteAccount.bind(this)} value={this.props.currentUser.id}>Delete</button>

    return(<div className="text-center">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1>Welcome, {this.props.currentUser.name}.</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={8} md={8} sm={8} xs={8} lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2} className="blueBox spaceTopS spaceBottomS">

          <h2>Your Boards:</h2>
            <div>
            <Col lg={8} md={8} sm={8} xs={8} lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2}>
                {boards}
            </Col>
            </div>
        </Col>
      </Row>
    </div>)
  }

  // user's name
  // list of boards
  // link each board to indv board

}

function mapStateToProps(state) {
  return {currentUser: state.currentUser, boards: state.boards}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boardRequest, createBoard, deleteUserAccount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
