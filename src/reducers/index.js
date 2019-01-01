import { combineReducers } from 'redux';
import _ from 'lodash';

// let postsInitialState = {
//   pagination,
//   default,
//   home,
//   slider,
//   search,
//   blog,
//   post
// }



//reduktor ma dostęp tylko do swojego stanu!!!!!!!!!!!!!!!!!!!!!!!!!
//jak chcesz przekazac stan do innego reduktora to musisz kombinowac!!!!!!
const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        pagination: action.payload.pagination,
        default: action.payload.posts,
        home: action.payload.posts.slice(0, 6),
        slider: action.payload.posts.slice(0, 3),
        blog: action.payload.posts
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

//Rozwiazanie problemu dzielenia stanem w reduktorach
//1: musisz tak zorganizowac kod, użyc wielu warunkow
// aby jeden reduktor dostarczal stan dla wszystkich akcji z nim zwiazanych
//2: napisac swoja funkcje lub uzyc reduce-reducers
//3: uzyc getState w akcjach redux-thunk

// export default combineReducers({
//   posts: {default: [], baner:, last: more: [...state.default, action.payload], sorted:},
//   showLoader: //string
// });
