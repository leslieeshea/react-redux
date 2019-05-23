import {
  createComment,
  CREATE_COMMENT
} from './commentActions';

describe('Comment Actions', () => {
  it('creates a createComment action', () => {
    expect(createComment(1, 'this is my comment')).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postId: 1,
        comment: 'this is my comment'
      }
    });
  });
});
