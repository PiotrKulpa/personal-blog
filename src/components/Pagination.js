import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { paginatePosts } from '../actions';
import { fetchPosts } from '../actions';

class Pagination extends Component {

  state = {
    pagLinks: [],
    pagLinksNumber: 0,
    tempPagLinks: [],
  }

  loadPosts = (min, max) => {
    this.props.paginatePosts(min, max)
  }

  componentDidMount() {

    // if (this.props.posts.length === 0) {
      this.props.fetchPosts().then(() => {
        this.setState({ pagLinksNumber: Math.ceil(this.props.posts.length / this.props.postPerPage) }, () => {
          let tempPagLinks = [];
          for (let x = 0; x < this.state.pagLinksNumber; x++) {
            let min = x * this.props.postPerPage;
            let max = min + this.props.postPerPage;
            tempPagLinks.push({ index: x, min: min, max: max });
            console.log(tempPagLinks);
          }

          this.setState({ pagLinks: tempPagLinks })

        })
      });
    // }
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
  return {
    posts: state.posts.default,
    showLoader: state.showLoader,
  };
}

export default connect(mapStateToProps, { paginatePosts, fetchPosts })(Pagination);

