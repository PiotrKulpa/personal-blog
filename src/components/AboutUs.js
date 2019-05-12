import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-wrap-layout1">
          <div className="container">
              <div className="row">
                  <div className="col-lg-7 d-flex align-items-center order-lg-2">
                      <div className="about-box-layout2">
                          <h5 className="item-title"><span>A</span> imply dummy text of the printingtypesetting are they
                              industr syorempsum has been the industryreacing
                              standard dummy text worker ever since.</h5>
                          <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                              industry's
                              standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                              and
                              scrambled it to make a type specimen book. It has survived not only.</p>
                          <p>Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                              industry's
                              standard dummy text ever since thewhen printer took a galleywhen an unknown printer
                              took a galley
                              of type and scrambled it to make a type specimen book. It has survived not only.</p>
                          <div className="about-right-side-content">About Us</div>
                      </div>
                  </div>
                  <div className="col-lg-5 order-lg-1">
                      <div className="about-box-layout1">
                          <img src="img/about/about1.jpg" alt="About Us" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
