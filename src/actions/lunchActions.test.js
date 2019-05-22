import {
  ADD_DRINK,
  addDrink
} from './lunchActions';

describe('Lunch Actions', () => {
  it('can add a drink', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });
});
