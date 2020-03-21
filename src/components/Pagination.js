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
  const { url = '' } = props;

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
  }

  const goBack = () => {
    setCounter((prevState) => prevState - 1);
    const{startCursor} = data.posts.pageInfo;
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
          {totalPagesData && totalPagesData.map((el) => <Link key={el} to={`${url}${el}`} >{el}</Link>)}
        </li>
        <li onClick={goNext} style={{pointerEvents: hasNextPage ? 'inherit' : 'none'}}>
          <Link to={`/blog/strona`} >Następna strona</Link>
        </li>
      </ul>
    </div>
  )
  
}

export default withApollo(memo(Pagination));

