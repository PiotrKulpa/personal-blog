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
    case 'PAGINATE_POSTS':
      return {
        ...state,
        blog: state.default.slice(action.payload.min, action.payload.max),
      };
    case 'SEARCH_POSTS':
    return {
      ...state,
      search: state.default.filter((el) => el.acf.title.toLowerCase().includes(action.payload.toLowerCase()) ), //TODO
    };
    case 'SHOW_POST':
      console.log(typeof action.payload);
      
      return {...state, post: state.blog.filter(el => el.id === Number(action.payload))};
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
      return state
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

// register reducers
export default combineReducers({
  posts: postsReducer,
  showLoader: showLoaderReducer
});
