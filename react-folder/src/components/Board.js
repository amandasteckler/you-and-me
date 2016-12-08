import React, {Component} from 'react'
import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from './Posts'
import PostForm from './PostForm'

class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
  }

  handleEditTitle(event) {
    event.preventDefault();
    debugger;
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleEditTitle.bind(this)}><h1>{this.props.board.title} <input type="text" placeholder="Edit Title" /><input type='submit' value="Edit!" /></h1></form>
        <h2>This board is between: {this.props.board.users[0].name} & {this.props.board.users[1].name}</h2>
        <PostForm />
        <Posts />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {board: state.currentBoard}
}


export default connect(mapStateToProps)(Board)
