import React, { Component } from 'react';
import Classes from './Blog.module.css';
import Posts from '../Posts/Posts';
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
                
                <Posts/>
            </div>
      );
  }
}

export default Blog;