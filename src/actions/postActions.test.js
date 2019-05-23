import {
  CREATE_POST,
  createPost,
  DELETE_POST,
  deletePost,
  UPDATE_POST,
  updatePost
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

  it('can update a post', () => {
    expect(updatePost(0, 'my new body')).toEqual({
      type: UPDATE_POST,
      payload: { id: 0, body: 'my new body' }
    });
  });
});
