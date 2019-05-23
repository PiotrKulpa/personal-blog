import React, { Component } from 'react'

import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import { sortPosts } from '../actions';
import { showMore } from '../actions';

class Posts extends Component {

  componentDidMount() {
    if (!this.props.posts) {
      this.props.fetchPosts();
    }
  }
  
  render() {
    return (
      <div className="col-xl-12 col-lg-6 col-md-6 col-12">
        <div className="blog-box-layout5">
          <div className="media media-none--lg">
            <div className="item-img">
              <a href="single-blog1.html"><img src="img/blog/blog22.jpg" alt="Blog" /></a>
            </div>
            <div className="media-body">
              <ul className="entry-meta">
                <li>June 23, 2018</li>
                <li><a href="#">Branding</a><a href="#">Logo</a></li>
              </ul>
              <h3 className="item-title"><a href="single-blog1.html">Here the old man launched area  into a disquisition</a></h3>
              <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce
                                        nec tellus sedye augue semper porta.</p>
              <a href="single-blog1.html" className="item-btn">Continue Reading
                <i className="flaticon-next"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts.blog,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, { fetchPosts, sortPosts, showMore })(Posts);
