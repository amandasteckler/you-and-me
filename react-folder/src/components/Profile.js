import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import auth from '../../lib/auth'

class Profile extends Component {

  render(){
    return(
      <div>
        <h1>Welcome, {this.props.profile.user_name}.</h1>
        <p>Your Boards:</p>
      </div>
    )
  }

  // user's name
  // list of boards
  // link each board to indv board

}

function mapStateToProps(state) {
  return {profile: state.current_user}
}

export default connect(mapStateToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
