import React, { Component } from 'react';
import SlickSlider from "react-slick";

class TopSlider extends Component {


  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (

      <section className="slider-wrap-layout1 box-layout-child-4">
        <div className="slider-left-side-content">JANUSZ SYKUT BLOG</div>
        <div className="slider-right-side-content">
          <ul>
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
        </div>

        <div className="full-width-container">
          <div className="slider-area slider-layout1 slider-top-margin95">
            <SlickSlider {...settings}>
              <div>
                <img src="/img/slider/slide2-1.jpg" alt=""/>
              </div>
              <div>
              <img src="/img/slider/slide2-2.jpg"  alt=""/>
              </div>
              <div>
              <img src="/img/slider/slide2-3.jpg"  alt=""/>
              </div>
          </SlickSlider>
          </div>
        </div>


      </section>


    );
  }
}


export default TopSlider;
