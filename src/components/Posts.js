import React, { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import GET_POSTS from '../queries/getPosts';
// import Preloader from './Preloader';



const Posts = () =>  {

  const { loading, error, data } = useQuery(GET_POSTS);
  
  const{
    posts
  } = data || {};
  const{
    edges
  } = posts || {};

  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Spróbuj ponownie.</p>);
  
    return (
      edges && edges.length > 0  ? 
      edges.map(({node: {treWpisuBloga: {title, text, image: {sourceUrl}, tags}, uri}}) => 
      <div key={''} className="col-xl-12 col-lg-6 col-md-6 col-12">
        <div className="blog-box-layout5">
          <div className="media media-none--lg">
            <div className="item-img">
              <NavLink to={`/blog/${uri}`}><img src={sourceUrl} alt="Blog" /></NavLink>
            </div>
            <div className="media-body">
              <ul className="entry-meta">
                <li>{''}</li>
                <li>
                {tags.map((tag, i) => <a key={i} href="/">{tag.__typename}</a>)}
                </li>
              </ul>
              <h3 className="item-title"><Link to={`/blog/${uri}`}>{title}</Link></h3>
              <p dangerouslySetInnerHTML={{__html: text.slice(0, 107) + '...'}} />
              <NavLink activeClassName="active-menu temp-logo" className="item-btn" to={`/blog/${uri}`}>
                Czytaj dalej <i className="flaticon-next"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      )
      : 
      <p>Loading...</p>
    )
}

export default memo(Posts);
