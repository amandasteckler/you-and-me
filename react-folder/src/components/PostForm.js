import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import postStatus from '../actions/postStatus'
import currentUserBoardId from '../actions/currentUserBoardId'
import { boardRequest } from '../actions'

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {content: ""}
  }

  handleStatusChange(event){
    this.setState({content: event.target.value})
  }

  handleOnSubmit(event){
    //submit a Post request to RailsAPI
      //RUBY::Post.new([:user_board_id], [:content])
    event.preventDefault();
      //currentUserBoardId(all_user_boards_for_this_board, current_user_id) => Returns:: user_board_id
    let user_board = currentUserBoardId(this.props.user_boards, this.props.current_user.user_id)

    let values = Object.assign({}, this.state, {user_board_id: user_board.id})
    this.props.postStatus(values)
    this.props.boardRequest(user_board.board_id)
    this.setState({content: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <label>Post a status</label>
          <input type="text" onChange={this.handleStatusChange.bind(this)} value={this.state.content}/>
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {current_user: state.profile.current_user, current_board_id: state, user_boards: state.reducer.current_board.board.user_boards}
  // , user_boards: state.reducer.current_board.user_boards
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postStatus, boardRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
