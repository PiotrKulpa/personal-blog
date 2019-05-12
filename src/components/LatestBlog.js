import React, { Component } from 'react'

export default class LatestBlog extends Component {
  render() {
    return (
      <section className="blog-wrap-layout2">
            <div className="container">
                <div className="section-heading text-center heading-dark heading-layout2">
                    <h2>Our Latest Blog</h2>
                    <div className="item-subtitle">What’s Hapenning</div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="blog-box-layout2">
                            <img src="img/blog/blog3.jpg" alt="Blog" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="blog-box-layout3">
                            <div className="item-subtitle">Branding</div>
                            <h3 className="item-title">
                                <a href="single-blog1.html">Ways quickly increase traffic to your website</a>
                            </h3>
                            <p>Aimply dummy text of the printing and type setting area industry. Lorem Ipsum has been
                                the industry's
                                standard dumen been the industry'so.</p>
                            <ul className="entry-meta">
                                <li>By
                                    <a href="#">admin,</a>
                                </li>
                                <li>June 23, 2018</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2">
                        <div className="blog-box-layout2">
                            <img src="img/blog/blog4.jpg" alt="Blog" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 d-flex align-items-center">
                        <div className="blog-box-layout3">
                            <div className="item-subtitle">Projects</div>
                            <h3 className="item-title">
                                <a href="single-blog1.html">Ways quickly increase traffic to your website</a>
                            </h3>
                            <p>Aimply dummy text of the printing and type setting area industry. Lorem Ipsum has been
                                the industry's
                                standard dumen been the industry'so.</p>
                            <ul className="entry-meta">
                                <li>By
                                    <a href="#">admin,</a>
                                </li>
                                <li>June 23, 2018</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
