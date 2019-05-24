import { getPosts, getPost } from './postSelectors';

describe('Post Selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'my first post', body: 'first post body' },
        { title: 'my second post', body: 'second post body' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { index: 0, title: 'my first post', body: 'first post body' },
      { index: 1, title: 'my second post', body: 'second post body' }
    ]);
  });

  it('gets a post by index', () => {
    const state = {
      posts: [
        { title: 'my first post', body: 'first post body' },
        { title: 'my second post', body: 'second post body' }
      ]
    };

    expect(getPost(state, 0)).toEqual({
      index: 0, title: 'my first post', body: 'first post body'
    });
  });
});
