import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { paginatePosts } from '../actions';

class Pagination extends Component {

  loadPosts = (min, max) => {
    this.props.paginatePosts(min, max)
  }

  render() {
    return (
      <div className="pagination-layout2 margin-b-30 d-flex justify-content-center">
        <ul>
          {this.props.pagination &&
            this.props.pagination.length > 0 &&
            this.props.pagination.map((el) => <li onClick={() => this.loadPosts(el.min, el.max)} key={el.index}><NavLink activeClassName="active" to="/blog">{el.index + 1}</NavLink></li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  
  return {
    pagination: state.posts.pagination,
  };
}

export default connect(mapStateToProps, { paginatePosts, })(Pagination);

