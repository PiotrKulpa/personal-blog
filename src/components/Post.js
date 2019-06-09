import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPost } from '../actions';
import { fetchPosts } from '../actions';

import { NavLink } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';
import Sidebar from './Sidebar';


//TODO: manualy inseted number of post
//TODO: clear previous post
//TODO: no loader, wrong path

class Post extends Component {

  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }
 

  componentDidMount() {
    window.scrollTo(0, 0);
    // if (this.props.blogData === false) {
    //   this.props.fetchPosts()
    //   .then(() => this.props.showPost(this.props.match.params.id));
    // } else {
    this.props.showPost(this.props.match.params.id)
    // }
    
  }

  renderPost() {

    return this.props.post.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{ __html: el.content.rendered }} />
        </div>
      )
    })
  }

  render() {
    return ( 
    <React.Fragment>
    <Breadcrumbs />  
    <section className="single-blog-wrap-layout1">
      <div className="container">
          <div className="row">
          { this.props.post && this.props.post.length > 0 ? this.props.post.map((el) => 
            <div key={el.id} className="col-xl-9 col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="blog-img">
                  <img src={el.acf.image.sizes.large} alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>{el.acf.date}</li>
                    <li>
                      {el.acf.tags.map((tag, i) => <a key={i} href="/">{tag.name}</a>)}
                    </li>
                  </ul>
                  <h2 className="blog-title">{el.acf.title}</h2>
                  <ul className="post-action">
                    <li>
                      <div className="media media-none--xs">
                        <img src="/img/avatar.jpg" alt="Blog" className="media-img-auto" />
                        <div className="media-body space-sm">
                          <h5 className="item-title">Autor <span>J. Sykut</span></h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p dangerouslySetInnerHTML={{__html: el.acf.text}} />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="blog-tag">
                      <li>Tags: <a href="/">Business,</a><a href="/">Trend</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="blog-social">
                      <li>Share:
                                          <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"> <i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-google-plus-g"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                
                <div className="pagination-layout1 margin-b-30">
                <button className="item-back-btn" onClick={this.goBack}><i className="flaticon-back"></i> Wróć do wpisów</button>
                </div>
              </div>
            </div>  
            ) : (
            <div className="col-xl-9 col-lg-8">Brak wyników</div>
            )}
            <Sidebar></Sidebar>
            </div>
          </div>
        </section>  
        </React.Fragment>
    )}
}

const mapStateToProps = state => {
  console.log('POST STATE: ' + state);
  return {
    post: state.posts.post,
    showLoader: state.showLoader,
    blogData: state.blogDataFlag,
  };
}

export default connect(mapStateToProps, { showPost, fetchPosts })(Post);
