import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import deletePost from '../actions/deletePost.js'
import deleteImage from '../actions/deleteImage'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'



class Posts extends Component {

  handleDeletePost(event){
    this.props.deletePost(event.target.value, this.props.currentBoardID)
  }

  handleDeleteImage(event){
    this.props.deleteImage(event.target.value, this.props.currentBoardID)
  }

  allMediaOrdered(posts, images){
    let flattened = posts.concat(images);
    flattened.sort((a, b)=>{
      a = new Date(a.createAt)
      b = new Date(b.createAt)
      return a>b ? -1 : a<b ? 1 : 0;
    });
    return flattened
  }

  formatTimeline(timeline, currentUserID){
    let nameSpace = "lg={11} md={11} sm={11} xs={11}"
    let buttonSpace = "lg={1} md={1} sm={1} xs={1}"
    function nameTagline(status){
      return (<Col nameSpace>
        <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>

        <p className="postContent"> {status.content}</p></Col>)
    }
    let list = timeline.map((status) =>{
      switch (status.type) {
        case "text":
        if (status.userID === currentUserID) {
          return (
            <div>
            <Col nameSpace>
              <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              <Button value={status.id} onClick={this.handleDeletePost.bind(this)}><span className="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span></Button>
              <p className="postContent" >{status.content}</p>
            </Col>
            </div>
            )
        } else {
          return (nameTagline(status))
        }
        case "image":
        if (status.userID === currentUserID) {
          return (<div>
            <Col buttonSpace>
              <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              <img className="img img-responsive" src={status.url}/>
            </Col>
            <Col buttonSpace>
              <button value ={status.id} onClick={this.handleDeleteImage.bind(this)}>Delete this image</button>
            </Col>
          </div>)
        } else {
          return (
            <Col buttonSpace>
              <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              <img className="img img-responsive" src={status.url}/>
            </Col>)
        }
        default:
          return <div>Unable to render status</div>

      }
    }, this)
    return list
  }

  render() {
    let timeline = this.allMediaOrdered(this.props.posts, this.props.images)
    let timelineFormatted = this.formatTimeline(timeline, this.props.currentUserID)
    return (
      <Col lg={10} md={10} sm={10} xs={10} className="lightBox">
        {timelineFormatted}
      </Col>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deletePost, deleteImage }, dispatch)
}

function mapStateToProps(state) {
  return {posts: state.posts, images: state.images, currentBoardID: state.currentBoard.id, currentUserID: state.currentUser.id}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
