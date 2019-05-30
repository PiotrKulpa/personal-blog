import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import { sortPosts } from '../actions';
import { showMore } from '../actions';


class Posts extends Component {

  componentDidMount() {
    
    if (this.props.blogData === false) {
      this.props.fetchPosts();
      //console.log('feczuj dane'); 
    }
  }
  
  render() {
    
    return (
      this.props.posts && this.props.posts.length > 0  ? 
      this.props.posts.map((el) => 
      <div key={el.id} className="col-xl-12 col-lg-6 col-md-6 col-12">
        <div className="blog-box-layout5">
          <div className="media media-none--lg">
            <div className="item-img">
              <a href="single-blog1.html"><img src={el.acf.image.sizes.thumbnail} alt="Blog" /></a>
            </div>
            <div className="media-body">
              <ul className="entry-meta">
                <li>{el.acf.date}</li>
                <li>
                {el.acf.tags.map((tag, i) => <a key={i} href="/">{tag.name}</a>)}
                </li>
              </ul>
              <h3 className="item-title"><a href="single-blog1.html">{el.acf.title}</a></h3>
              <p dangerouslySetInnerHTML={{__html: el.acf.text.slice(0, 107) + '...'}} />
              <NavLink activeClassName="active-menu temp-logo" className="item-btn" to={`/blog/${el.id}`}>
                Czytaj dalej <i className="flaticon-next"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      )
      : 
      <div>Ładuję dane...</div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.blog,
    showLoader: state.showLoader,
    blogData: state.blogDataFlag,
  };
}

export default connect(mapStateToProps, { fetchPosts, sortPosts, showMore })(Posts);
