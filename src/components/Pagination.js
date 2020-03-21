import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux';

import GET_POSTS from '../queries/getPosts';
import postPerPage from '../helpers/postPerPage';

const Pagination = (props) => {
  const [counter, setCounter] = useState(0);
  const [totalPagesData, setTotalPagesData] = useState([1]);
  const dispatch = useDispatch();
  const data = useSelector(({ blogReducer }) => blogReducer.data);
  const totalPages = useSelector(({ blogReducer }) => blogReducer.totalPages);
  const {posts : {pageInfo: {hasNextPage = true, hasPreviouesPage = true} = {}} = {} } = data;
  const {client} = props;

  useEffect(() => {
    const accum = [];
    for(let x = 0; x < Number(totalPages); x++) {
      accum.push(x + 1);
    };
    setTotalPagesData(accum);
  }, [totalPages]);

  const goNext = () => {
    const{endCursor} = data.posts.pageInfo
    setCounter((prevState) => prevState + 1);
    dispatch({type: 'UPDATE_LOADER', payload: true});
    client.query({
      query: GET_POSTS,
      variables: {
        first: postPerPage,
        after: endCursor
      }
    })
    .then((fetchedData) => {
      dispatch({type: 'UPDATE_POSTS', payload: fetchedData.data});
      dispatch({type: 'UPDATE_LOADER', payload: false});
    })
    .catch((err) => console.log(err))
  }

  const goBack = () => {
    setCounter((prevState) => prevState - 1);
    const{startCursor} = data.posts.pageInfo;
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
        <li onClick={goBack} style={{pointerEvents: counter ? 'inherit' : 'none'}}>
          <Link to={`/blog/strona`} >Poprzednia strona</Link>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
           }}
        >
          {totalPagesData && totalPagesData.map((el) => <Link key={el} to={`/blog/strona/${el}`} >{el}</Link>)}
        </li>
        <li onClick={goNext} style={{pointerEvents: hasNextPage ? 'inherit' : 'none'}}>
          <Link to={`/blog/strona`} >Następna strona</Link>
        </li>
      </ul>
    </div>
  )
  
}

export default withApollo(memo(Pagination));

