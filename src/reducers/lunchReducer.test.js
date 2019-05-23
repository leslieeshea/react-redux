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
      drink: null,
    };

    const newState = lunchReducer(initialState, addDrink('water'));
    expect(newState).toEqual(
      { drink: 'water' }
    );
  });

  it('handles the addChips action', () => {
    const initialState = {
      chips: null
    };
    
    const newState = lunchReducer(initialState, addChips('BBQ'));
    expect(newState).toEqual(
      { chips: 'BBQ' }
    );
  });

  it('handles the addSandwich action', () => {
    const initialState = {
      sandwich: null
    };

    const newState = lunchReducer(initialState, addSandwich('turkey'));
    expect(newState).toEqual(
      { sandwich: 'turkey' }
    );
  });
});
