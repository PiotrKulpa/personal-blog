import { combineReducers } from 'redux';
import _ from 'lodash';
import postPerPage from '../helpers/postPerPage';
import { pagination } from '../helpers/pagination';

const initState = {
  default: [],
  search: [],
  blog: [],
  post: [],
  pagination: [],
}

const postsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        default: action.payload.posts, //all posts
        search: action.payload.posts,
        blog: action.payload.posts.slice(0, postPerPage),
        pagination: pagination(action.payload.posts.length, postPerPage),
      };
      break;
    case 'RESET_POSTS':
      return {
        ...state,
        blog: state.default.slice(0, postPerPage),
        pagination: pagination(state.default.length, postPerPage),
      };
      break;
    
    case 'PAGINATE_POSTS':
      return {
        ...state,
        blog: state.search.slice(action.payload.min, action.payload.max),
      };
      break;
    
    case 'SEARCH_POSTS':
      return {
        ...state,
        search: state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase())),
        blog: state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase())).slice(0, 6),
        pagination: pagination(state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase())).length, postPerPage),
      };
      break;

    case 'SHOW_POST':
      return {...state, post: state.default.filter(el => el.id === Number(action.payload))};
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
