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
        {this.props.post ? this.renderPost() : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
console.log(state);
  return {
    post: state.posts.post,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, { showPost })(Post);
