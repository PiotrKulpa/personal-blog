import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Breadcrumbs from './Breadcrumbs';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {

  static defaultProps = {
    center: {
      lat: 51.265624,
      lng: 22.519576
    },
    zoom: 14
  }

  render() {
    return (
      <React.Fragment>

        <Breadcrumbs />
        

        <section className="contact-page-wrap">
          <div className="container">
            <div className="google-map-area">
              
              <div style={{ height: '540px', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyA0CNfYubMCK65RWVnI8TzIRw1ROhSZLzc' }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={51.265624}
                    lng={22.519576}
                    text="J. Sykut"
                  />
                </GoogleMapReact>
              </div>
            </div>
            <div className="contact-method-area">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="contact-list">
                    <h5 className="item-title">Address:</h5>
                    <ul>
                      <li>59 Street, loseagne, Newyork</li>
                      <li>Road City</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="contact-list">
                    <h5 className="item-title">Phone:</h5>
                    <ul>
                      <li>+123 977 015 902</li>
                      <li>+123 977 015 902</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="contact-list">
                    <h5 className="item-title">E-mail:</h5>
                    <ul>
                      <li>info@gmail.com</li>
                      <li>info@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="contact-list">
                    <h5 className="item-title">Fax:</h5>
                    <ul>
                      <li>+59 987 065 009</li>
                      <li>+59 987 065 009</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrap">
              <div className="section-heading text-center heading-dark heading-layout2">
                <h2>Have a project? <span>Lets make great things</span></h2>
                <p>we are happy to work with clients from all over the glove.</p>
              </div>
              <form className="contact-form-box" id="contact-form">
                <div className="row">
                  <div className="col-md-4 form-group">
                    <input type="text" placeholder="Name *" className="form-control" name="name" data-error="Name field is required" required />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-md-4 form-group">
                    <input type="email" placeholder="E-mail *" className="form-control" name="email" data-error="e-mail field is required" required />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-md-4 form-group">
                    <input type="text" placeholder="Subject *" className="form-control" name="subject" data-error="Subject field is required" required />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-12 form-group">
                    <textarea placeholder="Comments*" className="textarea form-control" name="message" id="form-message" rows="2" cols="20"
                      data-error="Message field is required" required></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-12 form-group">
                    <button type="submit" className="item-btn">Sends Message<i className="flaticon-right-arrow"></i></button>
                  </div>
                </div>
                <div className="form-response"></div>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
