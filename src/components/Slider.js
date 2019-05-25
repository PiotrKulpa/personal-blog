import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//TODO: handle images

class Slider extends Component {


  render() {
    return (

      <section className="slider-wrap-layout1 box-layout-child-4">
        <div className="slider-left-side-content">JANUSZ SYKUT BLOG</div>
        <div className="slider-right-side-content">
          <ul>
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
        </div>
        <div className="full-width-container">


          <div className="slider-area slider-layout1 slider-top-margin95">
            <div className="bend niceties preview-1">
              
              
            </div>
          </div>
        </div>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav={false}
          autoplay={true}
          items={1}
          dots={false}
        >
          <div className="item">
            <img src="img/slider/slide2-1.jpg" alt="slider" title="#slider-direction-1" />
            <div id="slider-direction-21" className="t-cn slider-direction">
              <div className="slider-content s-tb slide-1">
                <div className="text-left title-container s-tb-c">
                  <div className="container">
                    <div className="slider-sub-text">Branding</div>
                    <div className="slider-big-text">Pouch MockUp</div>
                    <div className="slider-paragraph">Dedicated to crafting stand-out brands,
                        experiences anflo Pellentesque dapibus elementum
                          mi necerty sodalestiam acliquet nulla e dapibus eleme.</div>
                    <div className="slider-btn-area">
                      <a href="#" className="item-btn-light">Read More
                              <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item"><img src="img/slider/slide2-2.jpg" alt="slider" title="#slider-direction-1" /></div>
          <div className="item"><img src="img/slider/slide2-3.jpg" alt="slider" title="#slider-direction-1" /></div>

        </OwlCarousel>
      </section>


    );
  }
}


export default Slider;
