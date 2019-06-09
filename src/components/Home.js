import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import TopSlider from './TopSlider';
import AboutUs from './AboutUs';
import LatestBlog from './LatestBlog';
import HappyClients from './HappyClients';

//TODO: handle images

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <TopSlider />
        <AboutUs />
        <LatestBlog />
        <HappyClients />
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    slider: state.posts.slider,
    home: state.posts.home
  }
}

export default connect(mapStateToProps, {fetchPosts})(Home);
