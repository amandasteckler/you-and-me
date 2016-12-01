import React, {Component} from 'react'
// import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Posts extends Component {

  render() {
    return (

    <div>
      {this.props.posts}
    </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({boardRequest: boardRequest}, dispatch)
// }

function mapStateToProps(state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps)(Posts)
