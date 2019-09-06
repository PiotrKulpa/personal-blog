import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';


class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = { searchValue: '' };

    this.onSearch = this.onSearch.bind(this);
    this.onCategory = this.onCategory.bind(this);
  }

  searchTimer = null;

  onSearch(event) {
    let tempVal = event.target.value;
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      //console.log(tempVal);
      this.props.searchPosts(tempVal)
    }
      , 1000)
  }

  onCategory(e) {
    this.props.sortByCategory(e);
  }

  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-12 sidebar-widget-area sidebar-break-md">
        <Search />
        <div className="widget widget-category">
          <div className="section-header header-dark heading-layout3">
            <h3>Kategorie</h3>
          </div>
          <ul>
            {this.props.categories && this.props.categories.length > 0 ? this.props.categories.map((el, i) =>
              <li key={i} onClick={() => this.onCategory(el.slug)}>
                <Link href="#">
                  <i className="fas fa-angle-right"></i>{el.name}</Link>
              </li>
            ) : <p>Loading...</p>
            }
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
