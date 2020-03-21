import { combineReducers } from 'redux';

const initState = {
  data: [],
  searchData: [],
  singlePost: [],
  currentPage: 1,
  totalPages: 1,
  loading: true,
  error: false,
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...state,
        data: action.payload
      };
    case 'UPDATE_POST':
      return {
        ...state,
        singlePost: action.payload
      };
    case 'SEARCH_POST':
      return {
        ...state,
        searchData: action.payload
      };
    case 'UPDATE_TOTAL_PAGES':
      return {
        ...state,
        totalPages: action.payload
      };
    case 'UPDATE_LOADER':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}

// register reducers
export default combineReducers({
  blogReducer
});
