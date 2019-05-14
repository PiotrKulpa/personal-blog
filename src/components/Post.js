import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchPosts } from '../actions';
import { showPost } from '../actions';
import { Redirect } from 'react-router-dom';

//TODO: manualy inseted number of post
//TODO: clear previous post
//TODO: no loader, wrong path

class Post extends Component {

  componentDidMount() {
    //this.props.fetchPosts();
    //this.props.showPost(this.props.match.params.id)
  }

  renderPost() {

    return this.props.post.map(el => {
      return (
        <div key={el.id}>
          <h1>{el.title.rendered}</h1>
          <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
        </div>
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <div class="col-xl-9 col-lg-8">
                   <div class="single-blog-box-layout1">
                        <div class="blog-img">
                            <img src="img/blog/blog14.jpg" alt="Image" />
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta">
                                <li>June 23, 2018</li>
                                <li><a href="#">Branding</a><a href="#">Logo</a></li>
                            </ul>
                            <h2 class="blog-title">Here the old man launched area into a disuisition here
                                being beautiful is about singing even loudly</h2>
                            <ul class="post-action">
                                <li>
                                    <div class="media media-none--xs">
                                        <img src="img/blog/blog18.jpg" alt="Blog" class="media-img-auto" />
                                        <div class="media-body space-sm">
                                            <h5 class="item-title">Posted By <span>Superadmin</span></h5>
                                        </div>
                                    </div>
                                </li>
                                <li><i class="fas fa-comments"></i><span>05</span>Comments</li>
                                <li><i class="fas fa-heart"></i><span>20</span>Like</li>
                            </ul>
                            <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris 
                                fusce nec tellus sedye augue semper porta.Lorem ipsum dolor sit amet, 
                                consectetu de adipi scing elit, sed do eiusmod tempor inci didunt uttery
                                labore et dolor magna et aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercita ulamco labori nisi aliquip  ea commodo consequat eprehender.Portfo 
                                quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce nec tellus 
                                sedye augue semper porta.Portfo quntum imperdiet Deartuis sagittis are ipsum 
                                Praesent mauris fusce nec tellus sedye augue semper porta.</p>
                            <blockquote>“ Portfo quntum imperdiet Deartuis sagittismauris fusce nec tellus sedye 
                                augue semper porta ipsum dolor sit amet, consectetu de smod tempor inci didulabore et 
                                dolor magna et aliqua. ”</blockquote>
                            <p>Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce nec tellus 
                                sedye augue semper porta.Lorem ipsum dolor sit amet, consectetu de adipi scing elit, 
                                sed do eiusmod tempor inci didunt uttery labore et dolor magna et aliqua. Ut enim ad 
                                minim veniam, quis nostrud exercita ulamco labori nisi aliquip ea commodo consequat 
                                eprehender.Portfo quntum imperdiet Deartuis sagittis are ipsum Praesent mauris fusce 
                                nec tellus sedye augue semper porta.Portfo quntum imperdiet Deartuis sagittis are ipsum 
                                Praesent mauris fusce nec tellus sedye augue semper porta.</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <ul class="blog-tag">
                                    <li>Tags: <a href="#">Business,</a><a href="#">Trend</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="blog-social">
                                    <li>Share: 
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"> <i class="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-author">
                            <div class="media media-none--xs">
                                <img src="img/blog/blog19.jpg" alt="Author" class="media-img-auto" />
                                <div class="media-body">
                                    <h4 class="item-title">Shelly Rahman</h4>
                                    <div class="item-subtitle">Author</div>
                                    <p>consectetu de adipi scing elit, sed do eiusmod tempor inci didunt 
                                    utteraey labore et dolor magna et aliqua. Ut enim ad minim veniam, .
                                    quis nostrud exercita ulamco labori nisi aliquipe.</p>
                                </div>
                            </div>
                        </div>
                        <div class="blog-comment">
                            <div class="section-heading heading-dark heading-layout4">
                                <h2>03 Comments</h2>
                            </div>
                            <div class="media media-none--xs">
                                <img src="img/blog/blog19.jpg" alt="Blog Comments" class="img-fluid media-img-auto" />
                                <div class="media-body">
                                    <h4 class="post-title">Dakcon Nitiya<span>September 29, 2018</span></h4>
                                    <p>Borem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has is simply dumhe printing and typesetting industry.</p>
                                    <a href="#" class="item-btn">Reply</a>
                                </div>
                            </div>
                            <div class="media media-none--xs">
                                <img src="img/blog/blog20.jpg" alt="Blog Comments" class="img-fluid media-img-auto" />
                                <div class="media-body">
                                    <h4 class="post-title">Jack Sparrow<span>September 29, 2018</span></h4>
                                    <p>Borem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has is simply dumhe printing and typesetting industry.</p>
                                    <a href="#" class="item-btn">Reply</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-form">
                            <div class="section-heading heading-dark heading-layout4">
                                <h2>Leave Comments</h2>
                            </div>
                            <form class="contact-form-box" id="contact-form">
                                <div class="row gutters-15">
                                    <div class="col-md-4 form-group">
                                        <input type="text" placeholder="Name*" class="form-control" name="first_name" data-error="Name field is required" required />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <input type="email" placeholder="E-mail*" class="form-control" name="email" data-error="E-mail field is required" required />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <input type="text" placeholder="Website*" class="form-control" name="website" data-error="website field is required" required />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-12 form-group">
                                        <textarea placeholder="Message*" class="textarea form-control" name="message" rows="7" cols="20" data-error="Message field is required" required></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-12 form-group">
                                        <button class="item-btn">Post Comment<i class="fas fa-angle-right"></i></button>
                                    </div>
                                </div>
                                <div class="form-response"></div>
                            </form>
                        </div>
                        <div class="pagination-layout1 margin-b-30">
                            <div class="row">
                                <div class="col-5">
                                    <div class="prev-btn">
                                        <div class="media">
                                            <div class="item-img">
                                                <a href="#">
                                                    <img src="img/figure/prev.jpg" alt="Button" />
                                                    <i class="fas fa-angle-left"></i>
                                                </a>
                                            </div>
                                            <div class="media-body space-sm">
                                                <h4 class="item-title">Shaker Camping</h4>
                                                <div class="item-subtitle">Previous Project</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="home-btn">
                                        <a href="index.html"><i class="fas fa-th"></i></a>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="next-btn">
                                        <div class="media">
                                            <div class="items-content">
                                                <h4 class="item-title">Shaker Camping</h4>
                                                <div class="item-subtitle">Next Project</div>
                                            </div>
                                            <div class="media-body space-sm">
                                                <div class="item-img">
                                                    <a href="#">
                                                        <img src="img/figure/next.jpg" alt="Button" />
                                                        <i class="fas fa-angle-right"></i>
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
    );
  }
}

const mapStateToProps = state => {
console.log(state);
  return {
    post: state.posts.post,
    showLoader: state.showLoader
  };
}

export default connect(mapStateToProps, { showPost })(Post);
