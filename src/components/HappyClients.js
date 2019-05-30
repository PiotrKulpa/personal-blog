import React, { Component } from 'react';
import SlickSlider from "react-slick";

export default class HappyClients extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="testimonial-wrap-layout2">
        <div className="container">
          <div className="section-heading text-center heading-dark heading-layout1">
            <h2>Co mówią klienci</h2>
            <div className="item-subtitle">o moich usługach</div>
          </div>
          <div className="rc-carousel">
          <SlickSlider {...settings}>
              <div className="item testimonial-box-layout2">
                <div className="item-paragraph">Sorem Ipsum is simply dummy text of the printing and typesetting
                    indus try. Lorem Ipsum has been
                            the industry’sLorem Ipsum is simply the printing dummy text of the printing.</div>
                <div className="item-img">
                  <img src="img/testimonial/testimonial.jpg" alt="testimonial" />
                </div>
                <h3 className="item-title">Maxwell</h3>
                <div className="item-subtitle">Creative Director</div>
              </div>

              <div className="item testimonial-box-layout2">
                <div className="item-paragraph">Sorem Ipsum is simply dummy text of the printing and typesetting
                    indus try. Lorem Ipsum has been
                            the industry’sLorem Ipsum is simply the printing dummy text of the printing.</div>
                <div className="item-img">
                  <img src="img/testimonial/testimonial.jpg" alt="testimonial" />
                </div>
                <h3 className="item-title">Maxwell</h3>
                <div className="item-subtitle">Creative Director</div>
              </div>
          </SlickSlider>
          </div>
        </div>
      </section>
    )
  }
}
