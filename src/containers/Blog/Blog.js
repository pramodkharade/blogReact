import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Classes from './Blog.module.css';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
// import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('../NewPost/NewPost');
});
class Blog extends Component {

  state = {
    auth: true
  };

  render() {
    return (
      <div className={Classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink to='/' exact activeClassName="active" activeStyle={{
        textDecoration: 'underline',
        color: 'red'
      }}>Home</NavLink></li>
              <li><NavLink to={{
        pathname: '/new-post'
      }} activeStyle={{
        textDecoration: 'underline',
        color: 'red'
      }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
                { /* <Route path='/' exact render={() => <Posts/>} />
                <Route path='/new-posts' exact render={() => <NewPost/>} />
                 */ }
                 <Switch>
                 <Route path="/" component={Posts} exact />
                 {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} exact /> : null}
                 <Route path="/:id" component={FullPost} exact />
                 </Switch>
            </div>
      );
  }
}

export default Blog;