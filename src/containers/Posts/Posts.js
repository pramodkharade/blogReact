import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post';
import Classes from './Posts.module.css';
class Posts extends Component {
  state = {
    posts: [],
  };
  postSelectedHandler =(id) => {
    this.setState({
      selectedPostId: id
    });
  };
  componentDidMount() {
    axios.get('/posts')
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updateData = posts.map(post => {
          return {
            ...post,
            author: 'Pramod'
          };
        });
        this.setState({
          posts: updateData
        });
        console.log('Post Data is:', updateData);
      });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Link to={'/' + post.id} key={post.id}>
            <Post title={post.title}

        author={post.author}
        clicked={() => {
          this.postSelectedHandler(post.id)
        }} /> 
        </Link>);
    });
    return (<section className={Classes.Posts}>
            {posts}
        </section>);
  }
}

export default Posts;