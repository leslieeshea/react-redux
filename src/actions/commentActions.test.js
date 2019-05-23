import {
  createComment,
  CREATE_COMMENT,
  deleteComment,
  DELETE_COMMENT
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

  it('creates a deleteComment action', () => {
    expect(deleteComment(1, 1)).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postId: 1,
        commentId: 1
      }
    });
  });
});
