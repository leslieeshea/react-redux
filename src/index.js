import { createStore } from 'redux';
import {
  CREATE_POST,
  createPost
} from './actions/postActions';

const initialState = {
  title: null,
  body: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, title: action.payload.title, body: action.payload.body };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(createPost('hello there', 'this is my blog'));

console.log('added new post', store.getState());
