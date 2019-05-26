import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPost } from '../actions';
import { fetchPosts } from '../actions';

import Breadcrumbs from './Breadcrumbs';
import Sidebar from './Sidebar';


//TODO: manualy inseted number of post
//TODO: clear previous post
//TODO: no loader, wrong path

class Post extends Component {

  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchPosts()
      .then(() => this.props.showPost(this.props.match.params.id));
    } else {
      this.props.showPost(this.props.match.params.id)
    }
    
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
                <div className="blog-author">
                  <div className="media media-none--xs">
                    <img src="img/blog/blog19.jpg" alt="Author" className="media-img-auto" />
                    <div className="media-body">
                      <h4 className="item-title">Shelly Rahman</h4>
                      <div className="item-subtitle">Author</div>
                      <p>consectetu de adipi scing elit, sed do eiusmod tempor inci didunt
                      utteraey labore et dolor magna et aliqua. Ut enim ad minim veniam, .
                                      quis nostrud exercita ulamco labori nisi aliquipe.</p>
                    </div>
                  </div>
                </div>
                <div className="blog-comment">
                  <div className="section-heading heading-dark heading-layout4">
                    <h2>03 Comments</h2>
                  </div>
                  <div className="media media-none--xs">
                    <img src="img/blog/blog19.jpg" alt="Blog Comments" className="img-fluid media-img-auto" />
                    <div className="media-body">
                      <h4 className="post-title">Dakcon Nitiya<span>September 29, 2018</span></h4>
                      <p>Borem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has is simply dumhe printing and typesetting industry.</p>
                      <a href="/" className="item-btn">Reply</a>
                    </div>
                  </div>
                  <div className="media media-none--xs">
                    <img src="img/blog/blog20.jpg" alt="Blog Comments" className="img-fluid media-img-auto" />
                    <div className="media-body">
                      <h4 className="post-title">Jack Sparrow<span>September 29, 2018</span></h4>
                      <p>Borem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has is simply dumhe printing and typesetting industry.</p>
                      <a href="/" className="item-btn">Reply</a>
                    </div>
                  </div>
                </div>
                <div className="blog-form">
                  <div className="section-heading heading-dark heading-layout4">
                    <h2>Leave Comments</h2>
                  </div>
                  <form className="contact-form-box" id="contact-form">
                    <div className="row gutters-15">
                      <div className="col-md-4 form-group">
                        <input type="text" placeholder="Name*" className="form-control" name="first_name" data-error="Name field is required" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-md-4 form-group">
                        <input type="email" placeholder="E-mail*" className="form-control" name="email" data-error="E-mail field is required" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-md-4 form-group">
                        <input type="text" placeholder="Website*" className="form-control" name="website" data-error="website field is required" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-12 form-group">
                        <textarea placeholder="Message*" className="textarea form-control" name="message" rows="7" cols="20" data-error="Message field is required" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-12 form-group">
                        <button className="item-btn">Post Comment<i className="fas fa-angle-right"></i></button>
                      </div>
                    </div>
                    <div className="form-response"></div>
                  </form>
                </div>
                <div className="pagination-layout1 margin-b-30">
                  <div className="row">
                    <div className="col-5">
                      <div className="prev-btn">
                        <div className="media">
                          <div className="item-img">
                            <a href="/">
                              <img src="img/figure/prev.jpg" alt="Button" />
                              <i className="fas fa-angle-left"></i>
                            </a>
                          </div>
                          <div className="media-body space-sm">
                            <h4 className="item-title">Shaker Camping</h4>
                            <div className="item-subtitle">Previous Project</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="home-btn">
                        <a href="index.html"><i className="fas fa-th"></i></a>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="next-btn">
                        <div className="media">
                          <div className="items-content">
                            <h4 className="item-title">Shaker Camping</h4>
                            <div className="item-subtitle">Next Project</div>
                          </div>
                          <div className="media-body space-sm">
                            <div className="item-img">
                              <a href="/">
                                <img src="img/figure/next.jpg" alt="Button" />
                                <i className="fas fa-angle-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
    )}
}

const mapStateToProps = state => {
  console.log(state);
  return {
    post: state.posts.post,
    posts: state.posts.blog,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, { showPost, fetchPosts })(Post);
