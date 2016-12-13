import React, {Component} from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl, Form, ControlLabel, HelpBlock, Button, ButtonGroup } from 'react-bootstrap'
import $ from 'jquery'
import postStatus from '../actions/postStatus'
import boardRequest from '../actions/boardRequest'
import submitImage from '../actions/submitImage'
import postMethod from '../actions/postMethod'

// const CLOUDINARY_UPLOAD_PRESET = 'zprfewb9';
// const CLOUDINARY_UPLOAD_URL = '	https://api.cloudinary.com/v1_1/dzs7addex/upload';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      // uploadedFileCloudinaryUrl: '',
      imageUrl: "",
      postMethod: "",
      uploadedFile: ""
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
  let upload = request.post(`http://localhost:3000/images/new`)
                      // .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  return upload.end((err, response) => {
    if (err) {
      console.error(err);
    }
    if (response.body.secure_url !== '') {
      this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
      });
    }
    this.setState({imageUrl: JSON.parse(response.text).imageUrl})
  })
}

  handleStatusChange(event){
    this.setState({content: event.target.value})
  }

  handleOnSubmit(event){
    //submit a Post request to RailsAPI
      //RUBY::Post.new([:user_board_id], [:content])
    event.preventDefault();
    let values = Object.assign({}, this.state, {userBoardID: this.props.userBoardID})
    this.props.postStatus(values)
    // this.props.boardRequest(this.props.currentBoardID)
    this.setState({content: ""})
  }

  handleSubmitImage(event) {
    event.preventDefault()
    this.props.submitImage(event.target.attributes.value.value, this.props.userBoardID)
    this.setState({imageUrl: ""})
  }

  handlePost(event){
    this.props.postMethod(event.target.value)
  }

  dropdown(method){
    if (method === "text") {
      return (
            <form onSubmit={this.handleOnSubmit.bind(this)}>
              <FormGroup>
                <ControlLabel className="whiteText">Post a status</ControlLabel>
                <FormControl type="text" onChange={this.handleStatusChange.bind(this)} value={this.state.content}/>
              </FormGroup>

              <Button type="submit">Post</Button>
            </form>
      )
    } else if (method === "image") {
      return (
            <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}>
              <h3 className="whiteText">Drop an image or click to select a file to upload.</h3>
            </Dropzone>
          )
    } else {
      return <div></div>
    }
  }


  render() {
    let dropdownPoster = this.dropdown(this.props.posterMethod)
    //ISSUE:: Post/Delete image results in errors
    return (
      <div>
        <Row className="spaceBottomM">
          <Col lg={8} md={8} sm={8} xs={8} lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2}>
            <ButtonGroup>
              <Button value="text" onClick={this.handlePost.bind(this)}>Message</Button>
              <Button value="image" onClick={this.handlePost.bind(this)}>Photo</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="spaceBottomM">
          <Col lg={8} md={8} sm={8} xs={8} lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2}>
            {dropdownPoster}
          </Col>
          <Col lg={2} md={2} sm={2} xs ={2}>
              {this.state.imageUrl === '' ? null :
               <div>
                <img src={this.state.imageUrl} className = "img img-responsive"/>
                <Button value={this.state.imageUrl} onClick={this.handleSubmitImage.bind(this)}>Post Image</Button>
              </div>
              }
            </Col>
        </Row>
    </div>
    )
  }

}

function mapStateToProps(state){
  return {currentUser: state.currentUser, userBoardID: state.currentUser.userBoardID, currentBoardID: state.currentBoard.id, posterMethod: state.status.method}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postStatus, boardRequest, submitImage, postMethod }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
