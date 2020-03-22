import React, { memo, useEffect } from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import stringSlicer from '../helpers/stringSlicer';

import Preloader from './Preloader';
import Pagination from './Pagination';
import Blog from './Blog';
import PostList from './PostList';
import { getPosts } from '../api/posts';

const PostsDefault = () => {
  const dispatch = useDispatch();
  const blog = useSelector(({ blogReducer }) => blogReducer.data);
  const loading = useSelector(({ blogReducer }) => blogReducer.loading);
  const match = useRouteMatch();
  const { params: { id = '1' } } = match;

  const getPostsOnLoad = async (pageId) => {
    dispatch({ type: 'UPDATE_LOADER', payload: true });
    const result = await getPosts(pageId);
    dispatch({ type: 'UPDATE_LOADER', payload: false });
    const { data = {}, headers = {} } = result || {};
    console.log(data);

    const totalPages = headers['x-wp-totalpages'] || '1';
    dispatch({ type: 'UPDATE_POSTS', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_PAGES', payload: totalPages });
  }

  useEffect(() => {
    getPostsOnLoad(id);
  }, [getPosts, id]);


  return <PostList data={blog} loading={loading} url="/blog/strona/" />
}

export default withRouter(memo(PostsDefault));
