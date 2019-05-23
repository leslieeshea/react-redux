import postReducer from './postReducer';
import {
  createPost
} from '../actions/postActions';

describe('Post Reducer', () => {
  it('handles the create post action', () => {
    const newState = postReducer([], createPost('post title', 'post body'));
    expect(newState).toEqual([
      { title: 'post title', body: 'post body' }
    ]);
  });
});
