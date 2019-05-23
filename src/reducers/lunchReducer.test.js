import lunchReducer from './lunchReducer';
import {
  addDrink,
  addChips,
  addSandwich,
  removeDrink,
  removeChips,
  removeSandwich,
  removeAll
} from '../actions/lunchActions';

describe('Lunch Reducer', () => {
  it('handles the addDrink action', () => {
    const initialState = {
      drink: null
    };
    
    const newState = lunchReducer(initialState, addDrink('water'));
    expect(newState).toEqual(
      { drink: 'water' }
    );
  });
});
