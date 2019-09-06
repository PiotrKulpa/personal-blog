import React, { memo, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import GET_POSTS from '../queries/getPosts';
import Preloader from './Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'

const Posts = (props) => {
  const dispatch = useDispatch();
  const pagDirection = useSelector(({blogReducer}) => blogReducer.pagDirection);
  const first = useSelector(({blogReducer}) => blogReducer.first);
  const { id } = props.match.params;

  const setPaginationdata = useMemo(() => {
    if(id && pagDirection === 'next') {
      return {
        first,
        after: id,
        before: null,  
      }
    } else if(id && pagDirection === 'previous') {
      return {
        first,
        after: null,
        before: id,  
      }
    } else {
      return {
        first,
        after: null,
        before: null,  
      }
    }
  }, [id, pagDirection])
 
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: setPaginationdata
  });

  const {
    posts
  } = data || {};
  const {
    edges, pageInfo,
  } = posts || {};

  

  if (loading) return (<Preloader />);
  if (error) return (<p>Spróbuj ponownie.</p>);
  if (!posts.edges.length) return <p>Nie znaleziono wpisów.</p>;
  dispatch({type: 'UPDATE_POSTS_INFO', payload: pageInfo});
  
  
  return (
    edges && edges.length > 0 ?
      edges.map(({ node: { title, content, featuredImage: { sourceUrl }, tags: { edges }, uri } }, index) =>
        <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
          <div className="blog-box-layout5">
            <div className="media media-none--lg">
              <div className="item-img">
                <NavLink to={`/blog/${uri}`}><img src={sourceUrl} alt="Blog" /></NavLink>
              </div>
              <div className="media-body">
                <ul className="entry-meta">
                  <li>{''}</li>
                  <li>
                    {edges.map(({ node }, i) => <a key={i} href="/">{node.name}</a>)}
                  </li>
                </ul>
                <h3 className="item-title"><Link to={`/blog/${uri}`}>{title}</Link></h3>
                <p dangerouslySetInnerHTML={{ __html: content.slice(0, 107) + '...' }} />
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

export default withRouter(memo(Posts));
