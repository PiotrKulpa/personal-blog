import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchPosts } from '../actions';
import { sortPosts } from '../actions';
import { showMore } from '../actions';

class Pagination extends Component {

 state = {
  pagLinks: []
 }
  
  setPagLinks = () => {
    let pagLinksNumber = Math.ceil(this.props.posts.length / this.props.postPerPage),
        tempPagLinks = [];
    for (let x = 0; x < pagLinksNumber; x++) {
      let min = x * this.props.postPerPage;
      let max = min + this.props.postPerPage;
      tempPagLinks.push({index: x, min: min, max: max});
    }

    this.setState({ pagLinks: tempPagLinks})

    console.log(this.state.pagLinks);
    
     
  }

  loadPosts = (min, max) => {
    console.log(min, max); 
  }

  componentDidMount() {
    this.setPagLinks();
  }

  render() {
    return (
      <div className="pagination-layout2 margin-b-30 d-flex justify-content-center">
        <ul>
          {this.state.pagLinks && 
            this.state.pagLinks.length > 0 && 
            this.state.pagLinks.map((el) => <li onClick={() => this.loadPosts(el.min, el.max)} key={el.index}><NavLink activeClassName="active" to="/blog">{el.index + 1}</NavLink></li>)}
        </ul>
      </div>
    )
  }
}

Pagination.defaultProps = {
  postPerPage: 6,
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts.blog || [],
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, { fetchPosts, sortPosts, showMore })(Pagination);

