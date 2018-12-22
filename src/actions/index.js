import wpRestApi from '../api/wpRestApi';



export const fetchPosts = () => async dispatch => {
    //show loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'block' });
    const res = await wpRestApi('posts', '');

    // pass data to store
    dispatch({ type: 'FETCH_POSTS', payload: res });

    //hide loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'none' });
  };

export const showPost = (id) => async dispatch => {
    //show loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'block' });
    //dispatch({ type: 'SHOW_POST', payload: [] });
    const res = await wpRestApi('posts', id);

    // pass data to store
    dispatch({ type: 'SHOW_POST', payload: res });

    //hide loader icon
    dispatch({ type: 'SHOW_LOADER', payload: 'none' });
  };

// export const showPost = (posts, id) => {
//   return {
//     type: 'SHOW_POST',
//     payload: posts.filter(el => `${el.id}` === id)
//   }
// }
