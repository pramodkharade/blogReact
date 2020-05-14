import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
              <li><Link to='/'>Home</Link></li>
              <li><Link to={{
        pathname: '/new-post'
      }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
                { /* <Route path='/' exact render={() => <Posts/>} />
                <Route path='/new-posts' exact render={() => <NewPost/>} />
                 */ }
                 <Route path="/" component={Posts} exact />
                 <Route path="/new-post" component={NewPost} exact />
            </div>
      );
  }
}

export default Blog;