import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux';

import GET_POSTS from '../queries/getPosts';
import postPerPage from '../helpers/postPerPage';


const Pagination = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(({ blogReducer }) => blogReducer.data);
  const {client} = props;

  const goNext = () => {
    const{endCursor} = data.posts.pageInfo
    
    client.query({
      query: GET_POSTS,
      variables: {
        first: postPerPage,
        after: endCursor
      }
    })
    .then((data) => {
      dispatch({type: 'UPDATE_POSTS', payload: data.data});
    })
    .catch((err) => console.log(err))
  }

  const goBack = () => {
    const{startCursor} = data.posts.pageInfo
    
    client.query({
      query: GET_POSTS,
      variables: {
        last: postPerPage,
        before: startCursor
      }
    })
    .then((data) => {
      dispatch({type: 'UPDATE_POSTS', payload: data.data});
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="pagination-layout2 margin-b-30">
      <ul   style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
      }}>
        <li onClick={goBack} >
          <Link to={`/blog/strona`} >Poprzednia strona</Link>
        </li>
        <li onClick={goNext} >
          <Link to={`/blog/strona`} >Następna strona</Link>
        </li>
      </ul>
    </div>
  )
  
}

export default withApollo(memo(Pagination));

