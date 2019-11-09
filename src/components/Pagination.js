import React, { memo, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import GET_POSTS from '../queries/getPosts';


const Pagination = () => {
  const dispatch = useDispatch();
  const [getPosts, { called, loading, data= {} }] = useLazyQuery(GET_POSTS,
    { variables: { first: 5} }
    );
console.log(data);


  const goNext = () => {
    getPosts();
    
  }

  const goBack = () => {
    dispatch({type: 'UPDATE_PAG_INFO', payload: 'previous'});
  }
  
  useEffect(() => {
    dispatch({type: 'UPDATE_POSTS', payload: data});
  }, [dispatch, data] );

  //style={{pointerEvents: hasPreviousPage ? 'all' : 'all'}}

  return (
    <div className="pagination-layout2 margin-b-30">
      <ul   style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
      }}>
        <li onClick={goBack} >
          <Link to={`/blog`} >Poprzednia strona</Link>
        </li>
        <li onClick={goNext} >
          <Link to={`/blog`} >Następna strona</Link>
        </li>
      </ul>
    </div>
  )
  
}

export default withApollo(memo(Pagination));

