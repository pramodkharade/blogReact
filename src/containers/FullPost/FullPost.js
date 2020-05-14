import React, { Component } from 'react';
import axios from 'axios';
import Classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidMount() {
    console.log('Calling FullPost:', this.props)
    if (this.props.match.params.id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
        axios.get('/posts/' + this.props.match.params.id)
          .then((res) => {
            this.setState({
              loadedPost: res.data
            });
            console.log('Full Post is:', res.data);
          });
      }
    }
  }
  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id)
      .then((res) => {
        console.log('Delete Post', res);
      });
  }
  render() {
    let post = <p style={{
      textAlign: 'center'
    }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{
        textAlign: 'center'
      }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className={Classes.FullPost}>
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className={Classes.Edit}>
                    <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>

      );
    }
    return post;
  }
}

export default FullPost;