import { createStore } from 'redux';
import {
  CREATE_POST,
  createPost,
  DELETE_POST,
  deletePost,
  UPDATE_POST,
  updatePost
} from './actions/postActions';

const initialState = {
  title: null,
  body: null,
  id: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, title: action.payload.title, body: action.payload.body };
    case DELETE_POST:
      return { ...state, id: action.payload };
    case UPDATE_POST:
      return { ...state, id: action.payload.id, body: action.payload.body };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(createPost('hello there', 'this is my blog'));

console.log('added new post', store.getState());

store.dispatch(deletePost(0));

console.log('deleted post', store.getState());

store.dispatch(updatePost(0, 'my new body'));

console.log('updated post', store.getState());
