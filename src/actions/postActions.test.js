import {
  CREATE_POST,
  createPost,
  DELETE_POST,
  deletePost
} from './postActions';

describe('Post Actions', () => {
  it('can create a new post', () => {
    expect(createPost('post title', 'post body')).toEqual({
      type: CREATE_POST,
      payload: { title: 'post title', body: 'post body' }
    });
  });
});
