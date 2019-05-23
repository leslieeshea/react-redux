import { createStore } from 'redux';
import {
  addDrink,
  addChips,
  addSandwich,
  removeDrink,
  removeChips,
  removeSandwich,
  removeAll
} from './actions/lunchActions';
import lunch from './reducers/lunchReducer';

const store = createStore(lunch);

store.dispatch(addDrink('Coke'));

console.log('added drink', store.getState());

store.dispatch(addChips('BBQ'));

console.log('added chips', store.getState());

store.dispatch(addSandwich('Club'));

console.log('added sandwich', store.getState());

store.dispatch(removeDrink('Coke'));

console.log('removed drink', store.getState());

store.dispatch(removeChips('BBQ'));

console.log('removed chips', store.getState());

store.dispatch(removeSandwich('Club'));

console.log('removed sandwich', store.getState());

store.dispatch(removeAll());
