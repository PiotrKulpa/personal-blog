import wpInitRestApi from '../api/wpInitRestApi';
import { pagination } from '../helpers/pagination';
import postPerPage from '../helpers/postPerPage';

let currentRange = 1;

export const fetchPosts = () => dispatch => {

  console.log('feczuje dane');
  
  
    //show loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'block' });

     return wpInitRestApi('/posts', '')
     .then((res) => {
       
        // pass data to store
        dispatch({ type: 'FETCH_POSTS', payload: res });
        
        //hide loader icon
        dispatch({ type: 'SHOW_LOADER', payload: 'none' });

        //set flag to true
        dispatch({ type: 'SET_FLAG', payload: true });
      })
     .catch( (err)=> console.log(err));
    
  };

  export const resetPosts = () => {
    return {
      type: 'RESET_POSTS',
    }
  };

  export const searchPosts = (e) => dispatch => {
    //show loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'block' });

    // pass data to search reducer
    dispatch({ type: 'SEARCH_POSTS', payload: e });
    console.log(e);
    

    //hide loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'none' });
  };

  export const paginatePosts = (min, max) => dispatch => {
    //show loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'block' });

    // pass data to store
    dispatch({ type: 'PAGINATE_POSTS', payload: {min, max} });

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
