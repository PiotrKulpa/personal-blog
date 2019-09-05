import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useSelector } from 'react-redux';

const Pagination = () => {
 
  const blogData = useSelector(({blogReducer}) => blogReducer.blogData);

  return (
    <div className="pagination-layout2 margin-b-30 d-flex justify-content-center">
      <ul>
        <li>
          <Link to={`/blog/strona/${blogData.startCursor}`}>Poprzednia strona</Link>
        </li>
        <li>
          <Link to={`/blog/strona/${blogData.endCursor}`}>Następna strona</Link>
        </li>
      </ul>
    </div>
  )
  
}

export default withApollo(memo(Pagination));

