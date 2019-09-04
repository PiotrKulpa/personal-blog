import React, { memo } from 'react';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import Breadcrumbs from './Breadcrumbs';
import Posts from './Posts';
import SearchResult from './SearchResult';

const Blog = (props) => {

  const{path} = props.match;
  
  return (
    <>
      <Breadcrumbs />
      <section className="blog-wrap-layout4">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="row">
               { path === '/blog' ? <Posts /> : <SearchResult />}
              </div>
              <Pagination />
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Blog);
