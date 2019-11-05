import React, { memo, } from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const blogData = useSelector(({blogReducer}) => blogReducer.blogData);
  const hasNextPage = useSelector(({ blogReducer }) => blogReducer.blogData.hasNextPage);
  const hasPreviousPage = useSelector(({ blogReducer }) => blogReducer.blogData.hasPreviousPage);

  console.log(hasPreviousPage);
  

  const goNext = () => {
    dispatch({type: 'UPDATE_PAG_INFO', payload: 'next'});
  }

  const goBack = () => {
    dispatch({type: 'UPDATE_PAG_INFO', payload: 'previous'});
  }

  return (
    <div className="pagination-layout2 margin-b-30">
      <ul   style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
      }}>
        <li onClick={goBack} style={{pointerEvents: hasPreviousPage ? 'all' : 'all'}}>
          <Link to={`/blog/strona/${blogData.startCursor}`} >Poprzednia strona</Link>
        </li>
        <li onClick={goNext} style={{pointerEvents: hasNextPage ? 'all' : 'none'}}>
          <Link to={`/blog/strona/${blogData.endCursor}`} >Następna strona</Link>
        </li>
      </ul>
    </div>
  )
  
}

export default withApollo(memo(Pagination));

