import React, { memo, useEffect } from 'react';
import { NavLink, Link, withRouter, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from './Preloader';
import Pagination from './Pagination';
import Blog from './Blog';
import { searchPost } from '../api/posts';

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(({ blogReducer }) => blogReducer.searchData);
  const loading = useSelector(({ blogReducer }) => blogReducer.loading);
  const match = useRouteMatch();
  const { params: { search = '', id = '1' } } = match;

  console.log(search, id);
  

  const searchPostOnLoad = async (search, pageId) => {
    dispatch({type: 'UPDATE_LOADER', payload: true});
    const result = await searchPost(search, pageId);
    dispatch({type: 'UPDATE_LOADER', payload: false});
    const { data = {}, headers = { } } = result || {};
    const totalPages = headers['x-wp-totalpages'] || '1';
    console.log(headers);
    
    dispatch({ type: 'SEARCH_POST', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_PAGES', payload: totalPages });
  }

  useEffect(() => {
    searchPostOnLoad(search, id);
  }, [id, search] ); 

  if (loading) return (<Preloader />);

  return (
   <Blog>
    {searchData && searchData.length > 0 ?
      searchData.map(({
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
                  <NavLink to={`/blog/${slug}`}><img src={photo} alt="Blog" /></NavLink>
                </div>
                <div className="media-body">
                  <ul className="entry-meta">
                    <li>
                      {tags && tags.map((el, i) => <a key={i} href={el.link}>{el[0] && el[0].name}</a>)}
                    </li>
                  </ul>
                  <h3 className="item-title"><Link to={`/blog/${slug}`}>{title.rendered}</Link></h3>
                  <p dangerouslySetInnerHTML={{ __html: content.rendered.slice(0, 107) + '...' }} />
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
      <p>Nie znaleziono pasujacych wyników</p>}
      <Pagination url={`/szukaj/${search}/`} />
    </Blog>
  )
}

export default withRouter(memo(SearchResult));
