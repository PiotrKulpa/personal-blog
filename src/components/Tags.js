import React, { memo, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from './Preloader';
import PostList from './PostList';
import { searchTags } from '../api/posts';

const Tags = () => {
  const dispatch = useDispatch();
  const tagsData = useSelector(({ blogReducer }) => blogReducer.searchTags);
  const loading = useSelector(({ blogReducer }) => blogReducer.loading);
  const match = useRouteMatch();
  const { params: { tag = '', id = '1' } } = match;

  const searchTagsOnLoad = async (tag, pageId) => {
    dispatch({type: 'UPDATE_LOADER', payload: true});
    const result = await searchTags(tag, pageId);
    dispatch({type: 'UPDATE_LOADER', payload: false});
    const { data = {}, headers = { } } = result || {};
    const totalPages = headers['x-wp-totalpages'] || '1';
    console.log(headers);
    
    dispatch({ type: 'SEARCH_TAGS', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_PAGES', payload: totalPages });
  }

  useEffect(() => {
    searchTagsOnLoad(tag, id);
  }, [id, tag] ); 

  if (loading) return (<Preloader />);

  return <PostList data={tagsData} loading={loading} url={`/szukaj/${tag}/`} />
  
}

export default memo(Tags);
