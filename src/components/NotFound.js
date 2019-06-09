import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-page-content-wrap">
        <div className="error-content">
          <div className="main-logo">
            <a href="index.html"><img src="/img/jsykutlogo.jpg" alt="logo" /></a>
                    </div>
            <div className="error-logo">
              <img src="/img/404-logo.png" alt="404" />
                    </div>
              <h2>Ups! Nie ma takiej strony</h2>
              <p>Strona której szukasz została przeniesiona lub jej nie ma.
                        Użyj przycisku Home i przejdz do strony domowej.</p>
              <NavLink className="item-btn" to="/">Przejdź do Home <i className="flaticon-right-arrow"></i> </NavLink>
              <div className="copyright">© 2018 J.Sykut. All Rights Reserved.</div>
            </div>
          </div>
          <div id="Clouds">
            <div className="Cloud Foreground"></div>
            <div className="Cloud Background"></div>
          </div>
        </section>
        )
      }
