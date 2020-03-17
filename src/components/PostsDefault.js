import React, { memo, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import stringSlicer from '../helpers/stringSlicer';

import Preloader from './Preloader';
import Blog from './Blog';
import GET_POSTS from '../queries/getPosts';
import postPerPage from '../helpers/postPerPage';

const PostsDefault = () => {
  const dispatch = useDispatch();
  const blog = useSelector(({ blogReducer }) => blogReducer.data);
  const blogReducer = useSelector(({ blogReducer }) => blogReducer);

  const {
    posts
  } = blog || {};
  const {
    edges = [],
  } = posts || {};

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { first: postPerPage },
  });

  useEffect(() => {
    const { posts: {pageInfo : { startCursor = '' } = {}} = {} } = data;
    dispatch({type: 'UPDATE_POSTS', payload: data});
    dispatch({type: 'DEFAULT_MARKER', payload: startCursor});
    console.log(blogReducer);
  }, [dispatch, data,] );

  if (loading) return (<Preloader />);
  // if (error) return (<p>Spróbuj ponownie.</p>);
  // if (posts.edges && !posts.edges.length) return <p>Nie znaleziono wpisów.</p>;
  
  return (
    <Blog>
    {edges && edges.length > 0 ?
      edges.map(({ node: { title = '', content = '', featuredImage, tags, uri = '' } }, index) => {
        const { sourceUrl } = featuredImage || {}
        const { edges } = tags || {}
        return (
          <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
            <div className="blog-box-layout5">
              <div className="media media-none--lg">
                <div className="item-img">
                  <NavLink to={`/blog/${uri}`}><img src={sourceUrl || '/img/placeholder.jpg'} alt="Blog" /></NavLink>
                </div>
                <div className="media-body">
                  <ul className="entry-meta">
                    <li>
                      {edges.map(({ node = {} }, i) => <a key={i} href="/">{node.name && node.name}</a>)}
                    </li>
                  </ul>
                  <h3 className="item-title"><Link to={`/blog/${uri}`}>{title}</Link></h3>
                  <p dangerouslySetInnerHTML={{ __html: stringSlicer(content, 0, 107).replace(/<[^>]+>/g, '') }} />
                  <NavLink activeClassName="active-menu temp-logo" className="item-btn" to={`/blog/${uri}`}>
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
      <p>Loading...</p>}
      </Blog>
  )
}

export default withRouter(memo(PostsDefault));
