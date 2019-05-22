import {
  ADD_DRINK,
  addDrink,
  ADD_CHIPS,
  addChips,
  addSandwich,
  ADD_SANDWICH,
  REMOVE_DRINK,
  removeDrink,
  REMOVE_CHIPS,
  removeChips
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

  it('can remove a drink', () => {
    expect(removeDrink('coke')).toEqual({
      type: REMOVE_DRINK,
      payload: 'coke'
    });
  });

  it('can remove chips', () => {
    expect(removeChips('bbq')).toEqual({
      type: REMOVE_CHIPS,
      payload: 'bbq'
    });
  });
});
