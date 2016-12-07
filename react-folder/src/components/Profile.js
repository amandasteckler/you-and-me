import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { boardRequest } from '../actions'
// import auth from '../../lib/auth'

class Profile extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  handleOnClick(event) {
    event.preventDefault();
    this.props.boardRequest(event.target.attributes.value.value);
  }

  render(){
    let boards = this.props.boards.map((board) => {
      return <li><Link onClick={this.handleOnClick.bind(this)} value={board.id}>{board.title}</Link></li>
    })


    return(
      <div>
        <h1>Welcome, {this.props.currentUser.name}.</h1>
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
  return bindActionCreators({ boardRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
