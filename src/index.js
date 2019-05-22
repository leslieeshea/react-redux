import { createStore } from 'redux';
import {
  ADD_DRINK,
  addDrink
} from './actions/lunchActions';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'REMOVE_ALL':
      return initialState;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addDrink('Purple Fanta'));

console.log('added drink', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Sour Cream & Onion'
});

console.log('added chips', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Tuna'
});

console.log('added sandwich', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'Purple Fanta'
});

console.log('removed drink', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'Sour Cream & Onion'
});

console.log('removed chips', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'Tuna'
});

console.log('removed sandwich', store.getState());

store.dispatch({
  type: 'REMOVE_ALL'
});
