import React, { Component } from 'react'

export default class Breadcrumbs extends Component {
  render() {
    return (
      <section className="inner-page-banner bg-common inner-page-margin" data-bg-image="img/figure/banner.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Our Blog</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
