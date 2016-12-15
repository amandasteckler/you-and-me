import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import postMethod from '../actions/postMethod'
import boardRequest from '../actions/boardRequest'
// import boardDelete from '../actions/boardDelete'
import createBoard from '../actions/createBoard'
import deleteUserAccount from '../actions/deleteUserAccount'
import updateName from '../actions/updateName'
// import auth from '../../lib/auth'

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      otherUserEmail: "",
      name: ""
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
    event.preventDefault()
    // passing in state, which is just title, as well as current user id
    this.props.createBoard(this.state.title, this.state.otherUserEmail, this.props.currentUser.id)
    this.setState({title: '', otherUserEmail: ''})
  }

  handleDeleteAccount(event) {
    this.props.deleteUserAccount(this.props.currentUser.id)

  }

  handleEditUserName(event) {
    event.preventDefault();
    this.props.updateName(this.state.name, this.props.currentUser.id)

  }

  handleUserNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEditDropdown(event){
    this.props.postMethod("editing")
  }


  dropdown(method){
    if (method === "editing") {
      return (<div className="text-left">
        <Col lg={11} md={11} sm={11} xs={11}>
          <form className="spaceTopS" onSubmit={this.handleEditUserName.bind(this)}>
            <FormGroup>
              <ControlLabel className= "whiteText">Change Name</ControlLabel>
              <FormControl type="text" onChange={this.handleUserNameChange.bind(this)} />
            </FormGroup>
            <Button type='submit'>Edit</Button>
          </form>
        </Col>
        <Col lg={1} md={1} sm={1} xs={1} className="deleteBoard">
          <Button onClick={this.handleDeleteAccount.bind(this)} bsStyle="danger">Delete Account</Button>
        </Col>
    </div>)
    } else {
      return(<div></div>)
    }

  }

  render(){
    let dropdownEdit = this.dropdown(this.props.editing);
    let boards = this.props.boards.map((board) => {
      return (<Col className="borderBottomAccent lightBox spaceBottomS spaceTopS">
        <h3><Link onClick={this.handleOnClick.bind(this)} value={board.id}>{board.title}</Link></h3>
      </Col>)
    })

    return(<div className="text-center">
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
        <Button className="text-left" bsSize="small" onClick={this.handleEditDropdown.bind(this)}>
          <span className="glyphicon glyphicon-cog" aria-hidden="true" value="editing"></span>
        </Button>
        {dropdownEdit}
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1>Welcome, {this.props.currentUser.name}.</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6} lgOffset={3} mdOffset={3} smOffset={3} xsOffset={3} className="spaceBottomM">
          <form onSubmit={this.handleCreate.bind(this)} value={this.props.currentUser.id}>
            <FormGroup className="spaceBottomS">
              <ControlLabel className="whiteText largerText">Create New Board </ControlLabel>
              <FormControl type="text" placeholder="Board Title" onChange={this.handleTitleChange.bind(this)} value={this.state.title} />
              <FormControl type="text" placeholder="Other User's Email" onChange={this.handleOtherUserChange.bind(this)} value={this.state.otherUserEmail} />
            </FormGroup>
            <Button type="submit">
              Create
            </Button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col lg={8} md={8} sm={8} xs={8} lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2} className="blueBox spaceTopS spaceBottomS">

          <h2>Your Boards</h2>
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
  return {currentUser: state.currentUser, boards: state.boards, editing: state.status.method}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boardRequest, createBoard, deleteUserAccount, postMethod, updateName}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
