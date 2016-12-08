import React, {Component} from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery'
import postStatus from '../actions/postStatus'
import boardRequest from '../actions/boardRequest'
import previewImage from '../actions/previewImage'



const CLOUDINARY_UPLOAD_PRESET = 'zprfewb9';
const CLOUDINARY_UPLOAD_URL = '	https://api.cloudinary.com/v1_1/dzs7addex/upload';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      uploadedFileCloudinaryUrl: ''
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    let upload = request.post(`http://localhost:3000/images/`)
                        // .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', files[0]);

    // this.props.fetchImage(file)

     upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
      // this.setState({previewURL: JSON.parse(response.text).imageUrl})

      this.setState(JSON.parse(response.text).imageUrl)
      // this.previewImage(JSON.parse(response.text).imageUrl)
      debugger
    })
    debugger
  }

  handleImageUpload(file) {

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

  render() {
    // this.previewImage(this.state.previewURL)
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <label>Post a status</label>
          <input type="text" onChange={this.handleStatusChange.bind(this)} value={this.state.content}/>
          <input type="submit" value="Post" />
        </form>

        {/* <MyDropZone /> */}
        <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <div>
        <div className="FileUpload">
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>
      </div>

    )
  }

}

function mapStateToProps(state){
  return {currentUser: state.currentUser, userBoardID: state.currentUser.userBoardID, currentBoardID: state.currentBoard.id}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postStatus, boardRequest, previewImage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
