import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import boardRequest from '../actions/boardRequest'
import boardDelete from '../actions/boardDelete'
import createBoard from '../actions/createBoard'
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

  handleDelete(event) {
    event.preventDefault();
    // value.value = board id
    // class.value = user id
    this.props.boardDelete(event.target.attributes.value.value, event.target.attributes.class.value);
  }

  render(){
    let boards = this.props.boards.map((board) => {
      return <li><Link onClick={this.handleOnClick.bind(this)} value={board.id}>{board.title}</Link> <button onClick={this.handleDelete.bind(this)} value={board.id} className={this.props.currentUser.id} className="btn btn-danger">Delete Board</button></li>
    })

    return(
      <div>
        <h1>Welcome, {this.props.currentUser.name}.</h1>
        <form onSubmit={this.handleCreate.bind(this)} value={this.props.currentUser.id}>
          <label>Create New Board: </label>
          <input type="text" placeholder="Board Title" onChange={this.handleTitleChange.bind(this)} value={this.state.title} />
          <input type="text" placeholder="Other User's Email" onChange={this.handleOtherUserChange.bind(this)} value={this.state.otherUserEmail} />
          <input type="submit" value="Create!" />
        </form>
        <h2>Your Boards:</h2>
        <div>

          <ul>
            {boards}
          </ul>
        </div>
      </div>
    )
  }

  // user's name
  // list of boards
  // link each board to indv board

}

function mapStateToProps(state) {
  return {currentUser: state.currentUser, boards: state.boards}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boardRequest, boardDelete, createBoard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
