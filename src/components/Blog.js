import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

import { fetchPosts } from '../actions';
import { sortPosts } from '../actions';
import { showMore } from '../actions';



class Blog extends Component {

  componentDidMount() {
    if(!this.props.posts) {
      this.props.fetchPosts();
    }
  }



  renderPosts() {
    return this.props.posts.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          {/*
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
          */}
          <NavLink exact to={`/post/${el.id}`} >Więcej...</NavLink>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
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
       <section className="blog-wrap-layout4">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-8">
                    <div className="row">
                        <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                       <a href="single-blog1.html"><img src="img/blog/blog22.jpg" alt="Blog" /></a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            <li>June 23, 2018</li>
                                            <li><a href="#">Branding</a><a href="#">Logo</a></li>
                                        </ul>
                                        <h3 className="item-title"><a href="single-blog1.html">Here the old man launched area  into a disquisition</a></h3>
                                        <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                        nec tellus sedye augue semper porta.</p>
                                        <a href="single-blog1.html" className="item-btn">Continue Reading
                                            <i className="flaticon-next"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                        <a href="single-blog1.html"><img src="img/blog/blog23.jpg" alt="Blog" /></a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            <li>June 23, 2018</li>
                                            <li><a href="#">Branding</a><a href="#">Logo</a></li>
                                        </ul>
                                        <h3 className="item-title"><a href="single-blog1.html">Here the old man launched area  into a disquisition</a></h3>
                                        <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                        nec tellus sedye augue semper porta.</p>
                                        <a href="single-blog1.html" className="item-btn">Continue Reading
                                            <i className="flaticon-next"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                      <a href="single-blog1.html"><img src="img/blog/blog24.jpg" alt="Blog" /></a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            <li>June 23, 2018</li>
                                            <li><a href="single-blog1.html">Branding</a><a href="#">Logo</a></li>
                                        </ul>
                                        <h3 className="item-title"><a href="#">Here the old man launched area  into a disquisition</a></h3>
                                        <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                        nec tellus sedye augue semper porta.</p>
                                        <a href="single-blog1.html" className="item-btn">Continue Reading
                                            <i className="flaticon-next"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                      <a href="single-blog1.html"><img src="img/blog/blog25.jpg" alt="Blog" /></a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            <li>June 23, 2018</li>
                                            <li><a href="#">Branding</a><a href="#">Logo</a></li>
                                        </ul>
                                        <h3 className="item-title"><a href="single-blog1.html">Here the old man launched area  into a disquisition</a></h3>
                                        <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                        nec tellus sedye augue semper porta.</p>
                                        <a href="single-blog1.html" className="item-btn">Continue Reading
                                            <i className="flaticon-next"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                       <a href="single-blog1.html"><img src="img/blog/blog26.jpg" alt="Blog" /></a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            <li>June 23, 2018</li>
                                            <li><a href="#">Branding</a><a href="#">Logo</a></li>
                                        </ul>
                                        <h3 className="item-title"><a href="single-blog1.html">Here the old man launched area  into a disquisition</a></h3>
                                        <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                        nec tellus sedye augue semper porta.</p>
                                        <a href="single-blog1.html" className="item-btn">Continue Reading
                                            <i className="flaticon-next"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                      <a href="single-blog1.html"><img src="img/blog/blog25.jpg" alt="Blog" /></a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            <li>June 23, 2018</li>
                                            <li><a href="#">Branding</a><a href="#">Logo</a></li>
                                        </ul>
                                        <h3 className="item-title"><a href="single-blog1.html">Here the old man launched area  into a disquisition</a></h3>
                                        <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                        nec tellus sedye augue semper porta.</p>
                                        <a href="single-blog1.html" className="item-btn">Continue Reading
                                            <i className="flaticon-next"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-layout2 margin-b-30 d-flex justify-content-center">
                        <ul>
                            <li><a href="#">01</a></li>
                            <li><a href="#" className="active">02</a></li>
                            <li><a href="#">03</a></li>
                            <li><a href="#">04</a></li>
                        </ul>
                    </div>   
                </div>
                <Sidebar />
            </div>
        </div>
       </section>
       </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts.blog,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, {fetchPosts, sortPosts, showMore})(Blog);
