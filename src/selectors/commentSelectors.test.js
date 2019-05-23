import { getComments } from './commentSelectors';

describe('Comment Selectors', () => {
  it('gets all comments by post id', () => {
    const state = {
      comments: {
        1: ['first comment', 'second comment']
      }
    };

    expect(getComments(state, 1)).toEqual(
      ['first comment', 'second comment']
    );
  });
});
