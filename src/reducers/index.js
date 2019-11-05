import { combineReducers } from 'redux';

const initState = {
  first: 5,
  pagDirection: '',
  blogData: {
    startCursor: null,
    endCursor: null,
    hasNextPage: false,
    hasPreviousPage: false,
  }
}

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS_INFO':
      return {
        ...state,
        blogData: action.payload
      };
    case 'UPDATE_PAG_INFO':
      return {
        ...state,
        pagDirection: action.payload
      };
    default:
      return state;
  }
}

// register reducers
export default combineReducers({
  blogReducer
});
