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

  it('can delete a post', () => {
    expect(deletePost(1)).toEqual({
      type: DELETE_POST,
      payload: 1
    });
  });
});
