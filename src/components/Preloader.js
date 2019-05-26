import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preloader extends Component {
  render() {
    return (
      <div id="preloader" style={{display: this.props.showLoader}}></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps)(Preloader);

