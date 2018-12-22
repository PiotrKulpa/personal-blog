import { combineReducers } from 'redux';

const postsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state
  }
};

const showPostReducer = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_POST':
      return [action.payload]
    default:
      return state
  }
};

const showLoaderReducer = (state = 'none', action) => {
  switch(action.type) {
    case 'SHOW_LOADER':
      return action.payload
    default:
      return state
  }
};

// register reducers
export default combineReducers({
  posts: postsReducer,
  post: showPostReducer,
  showLoader: showLoaderReducer
});
