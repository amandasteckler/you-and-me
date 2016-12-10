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

const CLOUDINARY_UPLOAD_PRESET = 'zprfewb9';
const CLOUDINARY_UPLOAD_URL = '	https://api.cloudinary.com/v1_1/dzs7addex/upload';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      uploadedFileCloudinaryUrl: '',
      imageUrl: "",
      postMethod: ""
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
        <Row>
          <Col lg={10} md={10} sm={10} xs={12}>
            <Form inline onSubmit={this.handleOnSubmit.bind(this)}>
              <FormGroup>
                <ControlLabel>Post a status</ControlLabel>
                <FormControl type="text" onChange={this.handleStatusChange.bind(this)} value={this.state.content}/>
              </FormGroup>

              <Button type="submit">Post</Button>
            </Form>
          </Col>
        </Row>
      )
    } else if (method === "image") {
      return (
        <Row>
          <Col lg={3} md={3} sm={3} xs={3}>
            <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}>
              <h3>Drop an image or click to select a file to upload.</h3>
            </Dropzone>
          </Col>
          <Col lg={6} md={6} sm={6} xs ={6}>
              {this.state.imageUrl === '' ? null : <div>
              <Col lg={11} md={11} sm={11} xs ={11}>
                <img src={this.state.imageUrl} className = "img img-responsive"/>
              </Col>
              <Col lg={1} md={1} sm={1} xs ={1}>
                <Button value={this.state.imageUrl} onClick={this.handleSubmitImage.bind(this)}>Post Image</Button>
              </Col>
            </div>}
          </Col>
        </Row>
      )
    } else {
      return <div></div>
    }
  }

  // <div>

  //   {/* <MyDropZone /> */}


  render() {
    let dropdownPoster = this.dropdown(this.props.posterMethod)

    return (
      <div>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <ButtonGroup>
              <Button value="text" onClick={this.handlePost.bind(this)}>Message</Button>
              <Button value="image" onClick={this.handlePost.bind(this)}>Photo</Button>
            </ButtonGroup>
          </Col>
        </Row>
      {dropdownPoster}
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
