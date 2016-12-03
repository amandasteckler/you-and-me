import React, {Component} from 'react'
import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from './Posts'

class Board extends Component {

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.boardRequest(1);
  }

  render() {
    let usersTitle = this.props.board.users.map((user) => {
      return user.name
    }).join(" & ")

    usersTitle = "This board is between: " + usersTitle

    return (<div>
    <div>
      <p>This button will be in the profile page linking to a specific board</p>
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <button >Board Request - Board 1</button>
      </form>
    </div>

    <div>
      <h1>{this.props.board.board.title}</h1>
      <h2>{usersTitle}</h2>
    </div>

    <Posts />
  </div>)
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({boardRequest: boardRequest}, dispatch)
}

function mapStateToProps(state) {
  return {board: state.board}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
