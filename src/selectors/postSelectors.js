export const getPosts = state => state.posts.map((post, index) => ({
  ...post,
  index
}));

export const getPost = (state, index) => getPosts(state)[index];
