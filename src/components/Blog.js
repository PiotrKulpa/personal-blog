import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import Breadcrumbs from './Breadcrumbs';
import Posts from './Posts';

class Blog extends Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs />
        <section className="blog-wrap-layout4">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="row">
                  <Posts />
                </div>
                <Pagination />
              </div>
                <Sidebar />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
