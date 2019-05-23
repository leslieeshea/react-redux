import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import {
  createPost,
  deletePost,
  updatePost
} from './actions/postActions';

const store = createStore(postReducer);

store.dispatch(createPost('hello there', 'this is my blog'));

console.log('added new post', store.getState());

store.dispatch(deletePost(0));

console.log('deleted post', store.getState());

store.dispatch(updatePost(0, 'my new body'));

console.log('updated post', store.getState());
