import { combineReducers } from 'redux';

const initState = {
  data: {}
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

// register reducers
export default combineReducers({
  blogReducer
});
