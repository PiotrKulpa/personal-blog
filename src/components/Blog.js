import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Blog extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }



  renderPosts() {
    return this.props.posts.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
          <NavLink exact to={`/post/${el.id}`} >Więcej...</NavLink>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="Blog">
        <img style={{display: this.props.showLoader}} className="loader" src="loader.svg" alt="loader" />
        <div className="">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, {fetchPosts})(Blog);
