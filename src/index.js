import { createStore } from 'redux';
import {
  CREATE_POST,
  createPost,
  DELETE_POST,
  deletePost
} from './actions/postActions';

const initialState = {
  title: null,
  body: null,
  id: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, title: action.payload.title, body: action.payload.body };
    case DELETE_POST:
      return { ...state, id: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(createPost('hello there', 'this is my blog'));

console.log('added new post', store.getState());

store.dispatch(deletePost());

console.log('deleted post', store.getState());
