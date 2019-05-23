export const CREATE_POST = 'CREATE_POST';
export const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body }
});
