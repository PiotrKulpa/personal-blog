import { combineReducers } from 'redux';

const initState = {
  data: {},
  defaultMarker: '',
  loading: false,
  error: false,
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...state,
        data: action.payload
      };
    case 'DEFAULT_MARKER':
      return {
        ...state,
        defaultMarker: action.payload
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
