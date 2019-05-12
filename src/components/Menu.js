import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

{/* NAVIGATION */}
{/* <nav>
<NavLink exact activeClassName="active-menu" to="/">Home</NavLink>
<NavLink exact activeClassName="active-menu" to="/blog">Blog</NavLink>
<a href="http://prodentica.info/">Prodentica</a>
<a href="https://prestigelublin.eu/">Prestige</a>
<NavLink exact activeClassName="active-menu" to="/kontakt">Kontakt</NavLink>
</nav> */}

export default class Menu extends Component {
  render() {
    return (
      <header id="header_1">
      <div className="header-menu-area header-menu-layout2 box-layout-child">
          <div className="full-width-container">
              <div className="row no-gutters d-flex align-items-center">
                  <div className="col-lg-2 col-md-2 d-flex justify-content-start">
                      <div className="logo-area">
                          <a href="index.html" className="temp-logo">
                              <img src="img/footer-logo1.png" alt="logo" className="img-fluid" />
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-8 col-md-8 d-flex justify-content-center possition-static">
                      <div className="template-main-menu">
                          <nav id="dropdown">
                              <ul>
                                  <li>
                                      <NavLink exact activeClassName="active-menu" to="/">Home</NavLink>
                                  </li>
                                  
                                  <li>
                                      <NavLink exact activeClassName="active-menu" to="/blog">Blog</NavLink>
                                  </li>
                                  <li>
                                      <a href="http://prodentica.info/">Prodentica</a>
                                  </li>
                                  <li>
                                      <a href="https://prestigelublin.eu/">Prestige</a>
                                  </li>
                                  <li>
                                      <NavLink exact activeClassName="active-menu" to="/kontakt">Kontakt</NavLink>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <div className="col-lg-2 col-md-2 d-flex justify-content-end">
                      <div className="navigation-menu">
                          <ul>
                              <li className="header-search-box btn-color-dark">
                                  <a href="#header-search" title="Search">
                                      <i className="flaticon-search"></i>
                                  </a>
                              </li>
                              <li className="offcanvas-menu-wrap">
                                  <button type="button" className="offcanvas offcanvas-menu-btn offcanvas-btn-dark menu-status-open">
                                      <span className="menu-btn-icon">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </span>
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>
    )
  }
}
