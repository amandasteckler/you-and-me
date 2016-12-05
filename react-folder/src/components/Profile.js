import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
// import auth from '../../lib/auth'

class Profile extends Component {

  handleOnClick(event) {
    debugger
    event.preventDefault();
    this.props.boardRequest(1);
  }

  render(){
    debugger
    let boards = this.props.profile.boards.map((board) => {
      return BOOGERS
    })

    return(
      <div>
        <h1>Welcome, {this.props.profile.user_name}.</h1>
        <h2>Your Boards:</h2>
        <div>
          <ul>
            {boards}
            <li><Link to={url}>THIS IS A FUCKING LINK</Link></li>
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
  return {profile: state.profile.current_user}
}

export default connect(mapStateToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
