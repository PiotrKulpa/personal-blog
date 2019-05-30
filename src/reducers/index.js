import { combineReducers } from 'redux';
import _ from 'lodash';

const initState = {
  default: [],
  home: [],
  slider: [],
  blog: [],
  search: [],
}

const postsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        default: action.payload.posts, //all posts
        home: action.payload.posts.slice(0, 6),
        slider: action.payload.posts.slice(0, 3),
        blog: action.payload.posts.slice(0, 6),
      };
      break;
    
    case 'PAGINATE_POSTS':
      return {
        ...state,
        blog: state.default.slice(action.payload.min, action.payload.max),
      };
      break;
    
    case 'SEARCH_POSTS':
      return {
        ...state,
        search: state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase()) ), //TODO
      };
      break;

    case 'SHOW_POST':
      console.log(typeof action.payload);
      return {...state, post: state.blog.filter(el => el.id === Number(action.payload))};
      break;

    case 'SHOW_MORE':
      return  {...state, blog: [...state.blog, ...action.payload.posts]};
      break;

    case 'SORT_POSTS_NEWEST':
      return {...state, blog: _.orderBy(state.blog, ['date'], ['desc'])};
      break;

    case 'SORT_POSTS_OLDEST':
      return {...state, blog: _.orderBy(state.blog, ['date'], ['asc'])};
      break;

    case 'SORT_POSTS_ASC':
      return {...state, blog: _.orderBy(state.blog, ['title.rendered'], ['asc'])};
      break;

    case 'SORT_POSTS_DESC':
      return {...state, blog: _.orderBy(state.blog, ['title.rendered'], ['desc'])};
      break;

    default:
      return state;
  }
};

const showLoaderReducer = (state = 'none', action) => {
  switch(action.type) {
    case 'SHOW_LOADER':
      return action.payload;
      break;
    default:
      return state
  }
};

const showFlagReducer = (state = false, action) => {
  switch(action.type) {
    case 'SET_FLAG':
      return action.payload;
      break;
    default:
      return state
  }
};

// register reducers
export default combineReducers({
  posts: postsReducer,
  blogDataFlag: showFlagReducer,
  showLoader: showLoaderReducer
});
