import commentReducer from './commentReducer';
import {
  createComment,
  deleteComment
} from '../actions/commentActions';

describe('Comment Reducer', () => {
  it('handles the create comment action', () => {
    const newState = commentReducer({}, createComment(1, 'comment comment'));
    expect(newState).toEqual({
      1: ['comment comment']
    });
  });

  it('handles the create comment action with existing comments', () => {
    const initialState = {
      1: ['here is my comment']
    };

    const newState = commentReducer(initialState, createComment(1, 'another comment'));
    expect(newState).toEqual({
      1: ['here is my comment', 'another comment']
    });
  });

  it('handles the delete comment action', () => {
    const initialState = {
      1: ['here is my comment', 'another comment']
    };

    const newState = commentReducer(initialState, deleteComment(1, 0));
    expect(newState).toEqual({
      1: ['another comment']
    });
  });
});

