import commentReducer from './commentReducer';
import {
  createComment
} from '../actions/commentActions';

describe('Comment Reducer', () => {
  it('handles the create comments action', () => {
    const newState = commentReducer({}, createComment(1, 'comment comment'));
    expect(newState).toEqual({
      1: ['comment comment']
    });
  });

  it('handles the create comments action with existing comments', () => {
    const initialState = {
      1: ['here is my comment']
    };

    const newState = commentReducer(initialState, createComment(1, 'another comment'));
    expect(newState).toEqual({
      1: ['here is my comment', 'another comment']
    });
  });
});

