import React, { memo, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PostList from './PostList';
import { searchPost } from '../api/posts';

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(({ blogReducer }) => blogReducer.searchData);
  const loading = useSelector(({ blogReducer }) => blogReducer.loading);
  const match = useRouteMatch();
  const { params: { search = '', id = '1' } } = match;

  const searchPostOnLoad = async (search, pageId) => {
    dispatch({type: 'UPDATE_LOADER', payload: true});
    const result = await searchPost(search, pageId);
    dispatch({type: 'UPDATE_LOADER', payload: false});
    const { data = {}, headers = { } } = result || {};
    const totalPages = headers['x-wp-totalpages'] || '1';
    dispatch({ type: 'SEARCH_POST', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_PAGES', payload: totalPages });
  }

  useEffect(() => {
    searchPostOnLoad(search, id);
  }, [id, search] ); 

  return <PostList data={searchData} loading={loading} url={`/szukaj/${search}/`} />
  
}

export default memo(SearchResult);
