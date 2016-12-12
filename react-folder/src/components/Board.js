import React, {Component} from 'react'
// import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import Posts from './Posts'
import PostForm from './PostForm'
import updateBoard from '../actions/updateBoard'
import postMethod from '../actions/postMethod'
import boardDelete from '../actions/boardDelete'

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

  handleEditDropdown(event){
    this.props.postMethod("editing")
  }

  handleDelete(event) {
    // value.value = board id
      // event.target.attributes.value.value
    // class.value = user id
      // event.target.attributes.class.value
    this.props.boardDelete(this.props.board.id, this.props.currentUserID);
  }

  dropdown(method){
    if (method === "editing") {
      return (<div>
        <Col lg={11} md={11} sm={11} xs={11}>
          <form className="spaceTopS" onSubmit={this.handleEditTitle.bind(this)}>
            <FormGroup>
              <ControlLabel className= "whiteText">Edit Title</ControlLabel>
              <FormControl type="text" onChange={this.handleTitleChange.bind(this)} value={this.state.title} />
            </FormGroup>
            <Button type='submit'>Edit</Button>
          </form>
        </Col>
        <Col lg={1} md={1} sm={1} xs={1} className="deleteBoard">
          <Button onClick={this.handleDelete.bind(this)} value={this.props.board.id} className={this.props.currentUserID} bsStyle="danger">Delete Board</Button>
        </Col>
    </div>)
    } else {
      return(<div></div>)
    }

  }

  render() {
    let dropdownEdit = this.dropdown(this.props.editing);
    return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
        <Button bsSize="small" onClick={this.handleEditDropdown.bind(this)}>
          <span className="glyphicon glyphicon-cog" aria-hidden="true" value="editing"></span>
        </Button>
        {dropdownEdit}
        </Col>
      </Row>
      <Row className="spaceBottomXL">
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1 className="text-center">{this.props.board.title}</h1>
          <h2 className="text-center">This board is between: {this.props.board.users[0].name} & {this.props.board.users[1].name}</h2>
        </Col>
      </Row>

      <PostForm />

      <Posts />
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {board: state.currentBoard, currentUserID: state.currentUser.id, editing: state.status.method}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBoard, boardDelete, postMethod }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)
