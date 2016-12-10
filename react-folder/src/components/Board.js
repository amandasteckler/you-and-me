import React, {Component} from 'react'
// import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import Posts from './Posts'
import PostForm from './PostForm'
import updateBoard from '../actions/updateBoard'

class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  handleEditTitle(event) {
    event.preventDefault();
    this.props.updateBoard(this.state.title, this.props.board.id, this.props.currentUserID)
  }

  render() {
    // <Row>
    //   <form onSubmit={this.handleEditTitle.bind(this)}>
    //
    //     <input type="text" placeholder="Edit Title" onChange={this.handleTitleChange.bind(this)} value={this.state.title} />
    //     <input type='submit' value="Edit!" />
    //   </form>

    //   <Posts />
    // </Row>

    return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1>{this.props.board.title}</h1>
          <h2>This board is between: {this.props.board.users[0].name} & {this.props.board.users[1].name}</h2>
        </Col>
      </Row>

      <PostForm />
      
      <Row>
        <Col>

        </Col>
      </Row>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {board: state.currentBoard, currentUserID: state.currentUser.id}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBoard }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)
