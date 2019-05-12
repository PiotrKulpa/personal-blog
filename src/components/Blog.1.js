import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

import { fetchPosts } from '../actions';
import { sortPosts } from '../actions';
import { showMore } from '../actions';



class Blog extends Component {

  componentDidMount() {
    if(!this.props.posts) {
      this.props.fetchPosts();
    }
  }



  renderPosts() {
    return this.props.posts.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          {/*
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
          */}
          <NavLink exact to={`/post/${el.id}`} >Więcej...</NavLink>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="Blog">
        <select onChange={e => this.props.sortPosts(e)}>
          <option value="newest" defaultValue="selected">Najnowsze</option>
          <option value="oldest">Najstarsze</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <div className="blog-content">
          <img style={{display: this.props.showLoader}} className="loader" src="loader.svg" alt="loader" />
          <div className="">
            {this.props.posts ? this.renderPosts(): null}
          </div>
        </div>
        <button onClick={this.props.showMore}>Zaladuj więcej</button>
        <Sidebar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts.blog,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, {fetchPosts, sortPosts, showMore})(Blog);
