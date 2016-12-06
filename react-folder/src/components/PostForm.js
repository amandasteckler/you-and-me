import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import postStatus from '../actions/postStatus'
import currentUserBoardId from '../actions/currentUserBoardId'
import { boardRequest } from '../actions'
// import { ImageUpload } from './ImageUpload'
// import MyDropZone from './MyDropZone'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'zprfewb9';
const CLOUDINARY_UPLOAD_URL = '	https://api.cloudinary.com/v1_1/dzs7addex/upload';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      uploadedFileCloudinaryUrl: ''
  }
    //is there where an instance of imageUpload needs to be added?
    //should content be an array that we iterate and map over, so that content
      //can hold both text the user posts and images the user uploads?
      //if so, many of the places where content gets assigned should actually
        //be pushing data.
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
      });
    }
  });
}

  handleStatusChange(event){
    this.setState({content: event.target.value})
  }

  handleOnSubmit(event){
    //submit a Post request to RailsAPI
      //RUBY::Post.new([:user_board_id], [:content])
    event.preventDefault();
      //currentUserBoardId(all_user_boards_for_this_board, current_user_id) => Returns:: user_board_id
    let user_board = currentUserBoardId(this.props.user_boards, this.props.current_user.user_id)
    let values = Object.assign({}, this.state, {user_board_id: user_board.id})
    this.props.postStatus(values)
    this.props.boardRequest(user_board.board_id)
    this.setState({content: ""})
  }

  render() {
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
          ...
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
  return {current_user: state.profile.current_user, user_boards: state.reducer.current_board.board.user_boards}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postStatus, boardRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
