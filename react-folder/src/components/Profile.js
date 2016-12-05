import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import auth from '../../lib/auth'

class Profile extends Component {

  render(){
    debugger;

    let boards = this.props.profile.boards.map((board) => {
      return <li>{board.title}</li>
    })

    return(
      <div>
        <h1>Welcome, {this.props.profile.user_name}.</h1>
        <h2>Your Boards:</h2>
        <div>
          <ul>{boards}</ul>
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
