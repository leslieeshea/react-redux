import {
  ADD_DRINK,
  addDrink,
  ADD_CHIPS,
  addChips,
  addSandwich,
  ADD_SANDWICH
} from './lunchActions';

describe('Lunch Actions', () => {
  it('can add a drink', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });

  it('can add chips', () => {
    expect(addChips('salt and vinegar')).toEqual({
      type: ADD_CHIPS,
      payload: 'salt and vinegar'
    });
  });

  it('can add a sandwich', () => {
    expect(addSandwich('chipotle')).toEqual({
      type: ADD_SANDWICH,
      payload: 'chipotle'
    });
  });
});
