import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//TODO: handle images

class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderSlider() {
    return this.props.posts.slice(0, 3).map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.excerpt.rendered}} />
          <NavLink exact activeClassName="active-menu" to={`/post/${el.id}`} >Więcej...</NavLink>

        </div>
      )
    })
  }

  renderPosts() {
    return this.props.posts.slice(0, 6).map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="Contact">
        <div className="">
          {this.renderSlider()}
        </div>
        <hr />
        <div className="">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, {fetchPosts})(Home);
