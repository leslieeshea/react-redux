import postReducer from './postReducer';
import {
  createPost,
  deletePost
} from '../actions/postActions';

describe('Post Reducer', () => {
  it('handles the create post action', () => {
    const newState = postReducer([], createPost('post title', 'post body'));
    expect(newState).toEqual([
      { title: 'post title', body: 'post body' }
    ]);
  });

  it('handles the delete post action', () => {
    const initialState = [
      { title: 'post one', body: 'hello' },
      { title: 'post two', body: 'hello there' },
      { title: 'post three', body: 'goodbye bye' }
    ];

    const newState = postReducer(initialState, deletePost(1));
    expect(newState).toEqual([
      { title: 'post one', body: 'hello' },
      { title: 'post three', body: 'goodbye bye' }
    ]);
  });
});
