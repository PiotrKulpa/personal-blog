import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Area Start Here --> */}
      <footer className="footer-wrap-layout2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-box-layout2">
                <div className="footer-logo">
                  <NavLink to="/">
                    <img src="/img/jsykutlogo-footer.png" alt="Logo" />
                  </NavLink>
                </div>
                <ul className="footer-menu">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <a href="http://prodentica.info/">Prodentica</a>
                  </li>
                  <li>
                    <a href="https://prestigelublin.eu/">Prestige</a>
                  </li>
                  <li>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                  </li>
                </ul>
                <ul className="footer-social">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
                <div className="copyright">Copyright © 2018 by J. Sykut. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Area End Here --> */}
      {/* <!-- Search Box Start Here --> */}
      <div id="header-search" className="header-search">
        <button type="button" className="close">×</button>
        <form className="header-search-form">
          <input type="search" placeholder="Type here........" />
          <button type="submit" className="search-btn">
            <i className="flaticon-search"></i>
          </button>
        </form>
      </div>
      {/* <!-- Search Box End Here --> */}
      {/* <!-- Off canvas Menu Start --> */}
      <ul className="offcanvas-navigation">
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
      <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="shape-overlays__path" d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"></path>
        <path className="shape-overlays__path" d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"></path>
        <path className="shape-overlays__path" d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"></path>
      </svg>
      {/*  Off canvas Menu End  */}
    </>
  )
}

export default memo(Footer);