import React, { Component } from 'react';


class Sidebar extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-12 sidebar-widget-area sidebar-break-md">
        <div className="widget widget-search-box">
          <div className="input-group stylish-input-group">
            <input type="text" className="form-control" placeholder="Search here . . ." />
            <span className="input-group-addon">
              <button type="submit">
                <span className="flaticon-search" aria-hidden="true"></span>
              </button>
            </span>
          </div>
        </div>
        <div className="widget widget-category">
          <div className="section-header header-dark heading-layout3">
            <h3>Kategoie</h3>
          </div>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>Product</a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>Digital Marketing</a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>Branding</a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>Box</a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>Real Estate</a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>Technology</a>
            </li>
          </ul>
        </div>
        <div className="widget widget-recent-blog">
          <div className="section-header header-dark heading-layout3">
            <h3>Latest News</h3>
          </div>
          <div className="media">
            <div className="item-img">
              <a href="/">
                <img src="/img/blog/blog7.jpg" alt="News" />
              </a>
            </div>
            <div className="media-body space-sm">
              <h5 className="post-title">
                <a href="/">Page Builder blog grow 2018</a>
              </h5>
              <div className="post-date">23 June, 2018</div>
            </div>
          </div>
          <div className="media">
            <div className="item-img">
              <a href="/">
                <img src="/img/blog/blog7.jpg" alt="News" />
              </a>
            </div>
            <div className="media-body space-sm">
              <h5 className="post-title">
                <a href="/">Page Builder blog grow 2018</a>
              </h5>
              <div className="post-date">23 June, 2018</div>
            </div>
          </div>
          <div className="media">
            <div className="item-img">
              <a href="/">
                <img src="/img/blog/blog7.jpg" alt="News" />
              </a>
            </div>
            <div className="media-body space-sm">
              <h5 className="post-title text-row-2">
                <a href="/">Page Builder blog grow 2018</a>
              </h5>
              <div className="post-date">23 June, 2018</div>
            </div>
          </div>
          <div className="media">
            <div className="item-img">
              <a href="/">
                <img src="/img/blog/blog7.jpg" alt="News" />
              </a>
            </div>
            <div className="media-body space-sm">
              <h5 className="post-title">
                <a href="/">Page Builder blog grow 2018</a>
              </h5>
              <div className="post-date">23 June, 2018</div>
            </div>
          </div>
        </div>
        <div className="widget widget-archives">
          <div className="section-header header-dark heading-layout3">
            <h3>Archives</h3>
          </div>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>July 2018
                                    <span>(15)</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>August 2018
                                    <span>(05)</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>October 2018
                                    <span>(10)</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-right"></i>November 2018
                                    <span>(20)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="widget widget-tag">
          <div className="section-header header-dark heading-layout3">
            <h3>Tags</h3>
          </div>
          <ul>
            <li>
              <a href="/">Advertising</a>
            </li>
            <li>
              <a href="/">Electonics</a>
            </li>
            <li>
              <a href="/">Food</a>
            </li>
            <li>
              <a href="/">Mobile</a>
            </li>
            <li>
              <a href="/">Social</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
