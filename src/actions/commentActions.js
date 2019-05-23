export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postId, comment) => ({
  type: CREATE_COMMENT,
  payload: { postId, comment }
});
