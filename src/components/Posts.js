import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import { resetPosts } from '../actions';


class Posts extends Component {
  
  componentDidMount() {

    window.scrollTo(0, 0);
    
    if (this.props.blogData === false) {
      this.props.fetchPosts();
    }
  }

  componentDidUpdate() {
    console.log('uaktualinil się');

    //TODO problem when return from search page
    //refactor posts:
    // add blog/strona/1 etc

    //add search results page now routing is bad


    
  }

  componentWillUnmount() {
    this.props.resetPosts();
  }
  
  render() {
    
    return (
      this.props.posts && this.props.posts.length > 0  ? 
      this.props.posts.map((el) => 
      <div key={el.id} className="col-xl-12 col-lg-6 col-md-6 col-12">
        <div className="blog-box-layout5">
          <div className="media media-none--lg">
            <div className="item-img">
              <NavLink to={`/blog/wpis/${el.id}`}><img src={el.acf.image.sizes.thumbnail} alt="Blog" /></NavLink>
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
              <NavLink activeClassName="active-menu temp-logo" className="item-btn" to={`/blog/wpis/${el.id}`}>
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
    blogData: state.blogDataFlag,
  };
}

export default connect(mapStateToProps, { fetchPosts,  resetPosts })(Posts);
