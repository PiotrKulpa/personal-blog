import wpInitRestApi from '../api/wpInitRestApi';
//import wpRestApi from '../api/wpRestApi';

let currentRange = 1;

//akcje:

//fetchPosts
//showMore - uaktualnia state.blog
// sortPosts
//fetchPost - uaktualnia state.post

//searchPosts - uaktualnia search robi fetch o zakresie 100
//showCategory

export const fetchPosts = () => async dispatch => {
    //show loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'block' });
    const res = await wpInitRestApi('/posts', '');

    // pass data to store
    dispatch({ type: 'FETCH_POSTS', payload: res });

    //hide loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'none' });
  };

export const showMore = () => async (dispatch, getState) => {
    //show loader icon
    currentRange++;
    let maxRange = getState().posts.pagination;

    if(currentRange <= maxRange) {
      dispatch({ type: 'SHOW_LOADER', payload: 'block' });
      const res = await wpInitRestApi('/posts', `?page=${currentRange}`);

      // pass data to store
      dispatch({ type: 'SHOW_MORE', payload: res });

      //hide loader icon
      dispatch({ type: 'SHOW_LOADER', payload: 'none' });
    }
  };

export const showPost = (id) => {
    return {
      type: 'SHOW_POST',
      payload: id
    }
  };

export const sortPosts = (e) => {
  switch(e.target.value) {
    case 'newest':
      return { type: 'SORT_POSTS_NEWEST' };
    case 'oldest':
      return { type: 'SORT_POSTS_OLDEST' };
    case 'asc':
      return { type: 'SORT_POSTS_ASC' };
    case 'desc':
      return { type: 'SORT_POSTS_DESC' };
    default:
      return { type: 'SORT_POSTS_NEWEST' };
  }
}
