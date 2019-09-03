import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import Breadcrumbs from './Breadcrumbs';
import Posts from './Posts';

class Blog extends Component {

  // renderPosts() {
  //   return this.props.posts.map(el => {
  //     return (
  //       <div key={el.id}>
  //         <h1>{el.title.rendered}</h1>
  //         {/*
  //         <p dangerouslySetInnerHTML={{__html: el.content.rendered}} />
  //         */}
  //         <NavLink exact to={`/post/${el.id}`} >Więcej...</NavLink>
  //       </div>
  //     )
  //   })
  // }

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
