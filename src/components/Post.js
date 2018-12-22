import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchPosts } from '../actions';
import { showPost } from '../actions';
import { Redirect } from 'react-router-dom';

//TODO: manualy inseted number of post
//TODO: clear previous post
//TODO: no loader, wrong path

class Post extends Component {

  componentDidMount() {
    //this.props.fetchPosts();
    this.props.showPost(this.props.match.params.id)
  }

  renderPost() {

    return this.props.post.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
        </div>
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="Post">
      <img style={{display: this.props.showLoader}} className="loader" src="../public/loader.svg" alt="loader" />
        {this.props.post.length > 0 ? this.renderPost() : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
console.log(state);
  return {
    //posts: state.posts,
    post: state.post,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, { showPost })(Post);
