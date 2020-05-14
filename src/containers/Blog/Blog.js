import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Classes from './Blog.module.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
class Blog extends Component {



  render() {
    return (
      <div className={Classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/new-posts'>New Post</a></li>
            </ul>
          </nav>
        </header>
                <Route path='/' exact render={() => <Posts/>} />
                <Route path='/new-posts' exact render={() => <NewPost/>} />
                
            </div>
      );
  }
}

export default Blog;