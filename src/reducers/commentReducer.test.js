import commentReducer from './commentReducer';
import {
  createComment
} from '../actions/commentActions';

describe('Comment Reducer', () => {
  it('handles the create comments post action', () => {
    const newState = commentReducer({}, createComment(1, 'comment comment'));
    expect(newState).toEqual({
      1: ['comment comment']
    });
  });
});

