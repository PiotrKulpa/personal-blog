import React, { memo, useEffect } from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import stringSlicer from '../helpers/stringSlicer';

import Preloader from './Preloader';
import Blog from './Blog';
import { getPosts } from '../api/posts';

const PostsDefault = () => {
  const dispatch = useDispatch();
  const blog = useSelector(({ blogReducer }) => blogReducer.data);
  const loading = useSelector(({ blogReducer }) => blogReducer.loading);
  const match = useRouteMatch();
  const { params: { id = '1'} } = match;

  const getPostsOnLoad = async (pageId) => {
    dispatch({type: 'UPDATE_LOADER', payload: true});
    const result = await getPosts(pageId);
    dispatch({type: 'UPDATE_LOADER', payload: false});
    const { data = {}, headers = { } } = result || {};
    const totalPages = headers['x-wp-totalpages'] || '1';
    dispatch({ type: 'UPDATE_POSTS', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_PAGES', payload: totalPages });
  }

  useEffect(() => {
    getPostsOnLoad(id);
  }, [getPosts, id] ); 
  

  if (loading) return (<Preloader />);
  // if (error) return (<p>Spróbuj ponownie.</p>);
  
  return (
    <Blog>
    {blog && blog.length > 0 ?
      blog.map(({ 
        id = 0, 
        date = '', 
        title = {}, 
        content = {}, 
        _embedded = {}, 
        slug = '', 
      }, index) => {
        const photo = _embedded['wp:featuredmedia'] && 
        _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        const tags = _embedded['wp:term'] && _embedded['wp:term'];
        return (
          <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
            <div className="blog-box-layout5">
              <div className="media media-none--lg">
                <div className="item-img">
                  <NavLink to={`/blog/${slug}`}><img src={photo || '/img/placeholder.jpg'} alt="Blog" /></NavLink>
                </div>
                <div className="media-body">
                  <ul className="entry-meta">
                    <li>
                      {tags && tags.map((el,i) => <a key={i} href={el.link}>{el[0] && el[0].name}</a>)}
                    </li>
                  </ul>
                  <h3 className="item-title"><Link to={`/blog/${slug}`}>{title.rendered}</Link></h3>
                  <p dangerouslySetInnerHTML={{ __html: stringSlicer(content.rendered, 0, 107).replace(/<[^>]+>/g, '') }} />
                  <NavLink activeClassName="active-menu temp-logo" className="item-btn" to={`/blog/${slug}`}>
                    Czytaj dalej <i className="flaticon-next"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )
      }
      )
      :
      <p>Nie znaleziono wpisów.</p>}
      </Blog>
  )
}

export default withRouter(memo(PostsDefault));
