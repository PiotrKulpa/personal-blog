import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LatestBlog extends Component {
  render() {
    return (
      <section className="portfolio-wrap-layout2">
  <div className="container">
    <div className="section-heading text-center heading-dark heading-layout2">
      <h2>Ostatnie wpisy</h2>
      <div className="item-subtitle">według kategorii</div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box-layout2">
          <div className="item-img">
            <img src="img/project/project11.jpg" alt="Project 11" />
            <a href="#test-popup1" className="item-btn inline-popup">
              <i className="flaticon-next" />
            </a>
          </div>
          <div className="item-content">
            <h3 className="item-title">
              <a href="single-portfolio1.html">Paper Mockup</a>
            </h3>
            <div className="item-subtitle">
              <Link to="#">Element</Link>
            </div>
          </div>
        </div>
        <div id="test-popup1" className="popup-content mfp-hide">
          <div className="media media-none--xs">
            <div className="item-img">
              <img src="img/project/project11.jpg" alt="project" />
            </div>
            <div className="media-body">
              <h2 className="item-title"><Link to="#">Paper Mockup</Link></h2>
              <ul className="item-category">
                <li><i className="fas fa-arrow-right" />Brand Identity</li>
                <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                <li><i className="fas fa-arrow-right" />Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box-layout2">
          <div className="item-img">
            <img src="img/project/project7.jpg" alt="Project 7" />
            <Link to="#test-popup2" className="item-btn inline-popup">
              <i className="flaticon-next" />
            </Link>
          </div>
          <div className="item-content">
            <h3 className="item-title">
              <a href="single-portfolio1.html">Iconic Branding</a>
            </h3>
            <div className="item-subtitle">
              <Link to="#">Branding</Link>
            </div>
          </div>
        </div>
        <div id="test-popup2" className="popup-content mfp-hide">
          <div className="media media-none--xs">
            <div className="item-img">
              <img src="img/project/project7.jpg" alt="img" />
            </div>
            <div className="media-body">
              <h2 className="item-title"><Link to="#">Iconic Branding</Link></h2>
              <ul className="item-category">
                <li><i className="fas fa-arrow-right" />Brand Identity</li>
                <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                <li><i className="fas fa-arrow-right" />Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box-layout2">
          <div className="item-img">
            <img src="img/project/project10.jpg" alt="Project 10" />
            <a href="#test-popup3" className="item-btn inline-popup">
              <i className="flaticon-next" />
            </a>
          </div>
          <div className="item-content">
            <h3 className="item-title">
              <a href="single-portfolio1.html">Smart Watch</a>
            </h3>
            <div className="item-subtitle">
              <Link to="#">Watch</Link>
            </div>
          </div>
        </div>
        <div id="test-popup3" className="popup-content mfp-hide">
          <div className="media media-none--xs">
            <div className="item-img">
              <img src="img/project/project10.jpg" alt="img" />
            </div>
            <div className="media-body">
              <h2 className="item-title"><Link to="#">Smart Watch</Link></h2>
              <ul className="item-category">
                <li><i className="fas fa-arrow-right" />Brand Identity</li>
                <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                <li><i className="fas fa-arrow-right" />Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box-layout2">
          <div className="item-img">
            <img src="img/project/project10.jpg" alt="Project 10" />
            <a href="#test-popup4" className="item-btn inline-popup">
              <i className="flaticon-next" />
            </a>
          </div>
          <div className="item-content">
            <h3 className="item-title">
              <a href="single-portfolio1.html">Electronic Port</a>
            </h3>
            <div className="item-subtitle">
              <Link to="#">Accessories</Link>
            </div>
          </div>
        </div>
        <div id="test-popup4" className="popup-content mfp-hide">
          <div className="media media-none--xs">
            <div className="item-img">
              <img src="img/project/project10.jpg" alt="img" />
            </div>
            <div className="media-body">
              <h2 className="item-title"><Link to="#">Electronic Port</Link></h2>
              <ul className="item-category">
                <li><i className="fas fa-arrow-right" />Brand Identity</li>
                <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                <li><i className="fas fa-arrow-right" />Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box-layout2">
          <div className="item-img">
            <img src="img/project/project11.jpg" alt="Project 11" />
            <a href="#test-popup5" className="item-btn inline-popup">
              <i className="flaticon-next" />
            </a>
          </div>
          <div className="item-content">
            <h3 className="item-title">
              <a href="single-portfolio1.html">Seascape Villa</a>
            </h3>
            <div className="item-subtitle">
              <Link to="#">Aqaba, Jordan</Link>
            </div>
          </div>
        </div>
        <div id="test-popup5" className="popup-content mfp-hide">
          <div className="media media-none--xs">
            <div className="item-img">
              <img src="img/project/project11.jpg" alt="img" />
            </div>
            <div className="media-body">
              <h2 className="item-title"><Link to="#">Seascape Villa</Link></h2>
              <ul className="item-category">
                <li><i className="fas fa-arrow-right" />Brand Identity</li>
                <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                <li><i className="fas fa-arrow-right" />Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box-layout2">
          <div className="item-img">
            <img src="img/project/project7.jpg" alt="Project 7" />
            <Link to="#test-popup6" className="item-btn inline-popup">
              <i className="flaticon-next" />
            </Link>
          </div>
          <div className="item-content">
            <h3 className="item-title">
              <Link to="single-portfolio1.html">Seascape Villa</Link>
            </h3>
            <div className="item-subtitle">
              <Link to="#">Aqaba, Jordan</Link>
            </div>
          </div>
        </div>
        <div id="test-popup6" className="popup-content mfp-hide">
          <div className="media media-none--xs">
            <div className="item-img">
              <img src="img/project/project7.jpg" alt="img" />
            </div>
            <div className="media-body">
              <h2 className="item-title"><Link to="#">Seascape Villa</Link></h2>
              <ul className="item-category">
                <li><i className="fas fa-arrow-right" />Brand Identity</li>
                <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                <li><i className="fas fa-arrow-right" />Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="loadmore-layout2">
      <Link to="/blog" className="item-btn">Zobacz więcej wpisów</Link>
    </div>
  </div>
</section>

    )
  }
}
