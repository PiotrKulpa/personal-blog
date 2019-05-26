import React, { Component } from 'react';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class HappyClients extends Component {
  render() {
    return (
      <section className="testimonial-wrap-layout2">
        <div className="container">
          <div className="section-heading text-center heading-dark heading-layout1">
            <h2>Our Happy Clients</h2>
            <div className="item-subtitle">Clients say about our works</div>
          </div>
          <div className="rc-carousel owl-dot-layout1">

            {/* <OwlCarousel
               className="owl-theme"
               loop
               margin={10}
               nav={false}
               autoplay={true}
               items={1}
               dots={false}
            >

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


            </OwlCarousel> */}


          </div>
        </div>
      </section>
    )
  }
}
