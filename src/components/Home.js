import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//TODO: handle images

class Home extends Component {

  componentDidMount() {
    if(!this.props.home) {
      this.props.fetchPosts();
    }
  }

  renderSlider() {
    return this.props.slider.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.excerpt.rendered}} />
          <NavLink exact activeClassName="active-menu" to={`/post/${el.id}`} >Więcej...</NavLink>

        </div>
      )
    })
  }

  renderPosts() {
    return this.props.home.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
        </div>
      )
    })
  }

  render() {
    //console.log(this.props);
    return (
      <div className="Contact">
        <div className="">
          {this.props.slider ? this.renderSlider() : null}
        </div>
        <hr />
        <div className="">
          {this.props.home ? this.renderPosts() : null}
        </div>
      </div>
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
