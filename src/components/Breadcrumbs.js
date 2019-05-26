import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Breadcrumbs extends Component {

  state = {
    path: ''
  }

  componentDidMount() {
    this.setState({path: window.location.pathname.replace('/', '').charAt(0).toUpperCase() + window.location.pathname.slice(2)})
  }

  render() {
    return (
      <section className="inner-page-banner bg-common inner-page-margin" data-bg-image="/img/figure/banner.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>{this.state.path}</h1>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>{this.state.path}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
