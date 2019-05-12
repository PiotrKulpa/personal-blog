import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <!-- Footer Area Start Here --> */}
      <footer className="footer-wrap-layout2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-box-layout2">
                            <div className="footer-logo">
                                <a href="">
                                    <img src="img/footer-logo.png" alt="Logo" />
                                </a>
                            </div>
                            <ul className="footer-menu">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                </li>
                                <li>
                                    <a href="single-portfolio2.html">Portfolio</a>
                                </li>
                                <li>
                                    <a href="blog1.html">Blog</a>
                                </li>
                                <li>
                                    <a href="shop1.html">Shop</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                            <ul className="footer-social">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                            <div className="copyright">Copyright © 2018 by Zugan. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
         {/* <!-- Footer Area End Here --> */}
         {/* <!-- Search Box Start Here --> */}
         <div id="header-search" class="header-search">
             <button type="button" class="close">×</button>
             <form class="header-search-form">
                 <input type="search" value="" placeholder="Type here........" />
                 <button type="submit" class="search-btn">
                     <i class="flaticon-search"></i>
                 </button>
             </form>
         </div>
         {/* <!-- Search Box End Here --> */}
         {/* <!-- Off canvas Menu Start --> */}
         <ul class="offcanvas-navigation">
             <li>
                 <a href="index.html">Home</a>
             </li>
             <li>
                 <a href="about1.html">About</a>
             </li>
             <li>
                 <a href="blog1.html">Blog</a>
             </li>
             <li>
                 <a href="single-portfolio1.html">Portfolio</a>
             </li>
         </ul>
         <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path class="shape-overlays__path" d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"></path>
             <path class="shape-overlays__path" d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"></path>
             <path class="shape-overlays__path" d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"></path>
         </svg>
         {/*  Off canvas Menu End  */}
         </React.Fragment>
    )
  }
}
