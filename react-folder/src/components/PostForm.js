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
    event.preventDefault();
    let userBoardId = currentUserBoardId(this.props.user_boards, this.props.current_user)
    let values = Object.assign({}, this.state, {user_board_id: userBoardId})
    this.props.postStatus(values)
    this.props.boardRequest(this.props.user_boards[0].board_id)
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
  // SELECTION WILL NEED TO CHANGE ONCE LOGIN IS COMPLETE!!!!!
  return {current_user: state.signup.current_user, user_boards: state.reducer.board.user_boards}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postStatus, boardRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
