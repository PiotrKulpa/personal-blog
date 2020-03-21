import React, { memo } from 'react';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

const Blog = (props) => {

  // const{path} = props.match;
  
  return (
    <>
      <Breadcrumbs />
      <section className="blog-wrap-layout4">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="row">
               { props.children }
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Blog);
