import { createStore } from 'redux';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Purple Fanta'
});

console.log('added drink', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Sour Cream & Onion'
});
