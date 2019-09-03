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
  categories: [],
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
        categories: action.payload.posts.map(el => el.acf.categories[0] ).filter((v,i) => action.payload.posts.map(el => el.acf.categories[0].term_id ).indexOf(v.term_id) === i),  
      };
    case 'RESET_POSTS':
      return {
        ...state,
        blog: state.default.slice(0, postPerPage),
        pagination: pagination(state.default.length, postPerPage),
      };
    
    case 'PAGINATE_POSTS':
      return {
        ...state,
        blog: state.search.slice(action.payload.min, action.payload.max),
      };
    
    case 'SEARCH_POSTS':
      return {
        ...state,
        search: state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase())),
        blog: state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase())).slice(0, 6),
        pagination: pagination(state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase())).length, postPerPage),
      };

    case 'SORT_BY_CATEGORY':
      return {
        ...state,
        search: state.default.filter((el) => el.acf.categories[0].slug === action.payload),
        blog: state.default.filter((el) => el.acf.categories[0].slug === action.payload).slice(0, 6),
        pagination: pagination(state.default.filter((el) => el.acf.categories[0].slug === action.payload).length, postPerPage),
      };

    case 'SHOW_POST':
      return {...state, post: state.default.filter(el => el.id === Number(action.payload))};

    case 'SHOW_MORE':
      return  {...state, blog: [...state.blog, ...action.payload.posts]};

    case 'SORT_POSTS_NEWEST':
      return {...state, blog: _.orderBy(state.blog, ['date'], ['desc'])};

    case 'SORT_POSTS_OLDEST':
      return {...state, blog: _.orderBy(state.blog, ['date'], ['asc'])};

    case 'SORT_POSTS_ASC':
      return {...state, blog: _.orderBy(state.blog, ['title.rendered'], ['asc'])};

    case 'SORT_POSTS_DESC':
      return {...state, blog: _.orderBy(state.blog, ['title.rendered'], ['desc'])};

    default:
      return state;
  }
};

const showLoaderReducer = (state = 'none', action) => {
  switch(action.type) {
    case 'SHOW_LOADER':
      return action.payload;
    default:
      return state
  }
};

const showFlagReducer = (state = false, action) => {
  switch(action.type) {
    case 'SET_FLAG':
      return action.payload;
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
