import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import deletePost from '../actions/deletePost.js'
import deleteImage from '../actions/deleteImage'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'react-bootstrap'



class Posts extends Component {

  handleDeletePost(event){
    let postID = event.target.attributes.value.value;
    this.props.deletePost(postID, this.props.currentBoardID)
  }

  handleDeleteImage(event){
    this.props.deleteImage(event.target.attributes.value.value, this.props.currentBoardID)
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

    let list = timeline.map((status) =>{
      switch (status.type) {
        case "text":
        if (status.userID === currentUserID) {
          return (
          <div className="lightBox">
            <div className="postContent">
              <p>{status.content}</p>
            </div>

            <div className="nameLine">
              <ButtonToolbar>
                <Button bsSize="xsmall" className="deleteButton" onClick={this.handleDeletePost.bind(this)}><span className="glyphicon glyphicon glyphicon-trash" aria-hidden="true" value={status.id}></span></Button>

                <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              </ButtonToolbar>
            </div>
          </div>
          )
        } else {
          return (
            <div className="lightBox">
              <div className="postContent">
                <p>{status.content}</p>
              </div>
              <div className="nameLine">
                <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              </div>
            </div>
          )
        }
        case "image":
        if (status.userID === currentUserID) {
          return (
            <div className="lightBox">
              <div className="postContent" >
                <img className="img img-responsive" src={status.url}/>
              </div>

            <div className="nameLine">
              <ButtonToolbar>
                <Button bsSize="xsmall" className="deleteButton"  onClick={this.handleDeleteImage.bind(this)}><span className="glyphicon glyphicon glyphicon-trash" aria-hidden="true" value={status.id}></span></Button>

                <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              </ButtonToolbar>
            </div>
          </div>
        )
        } else {
          return (
            <div className="lightBox">
              <div className="postContent" >
                <img className="img img-responsive" src={status.url}/>
              </div>

              <div className="nameLine">
                <h5><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{status.userName}</h5>
              </div>
            </div>
          )
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
      <Row>
        <Col lg={8} md={8} sm={8} xs={8} lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2} className="blueBox spaceTopS spaceBottomS">
          {timelineFormatted}
        </Col>
      </Row>
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
