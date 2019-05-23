import { getPosts } from './postSelectors';

describe('Post Selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'my first post', body: 'first post body' },
        { title: 'my second post', body: 'second post body' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'my first post', body: 'first post body' },
      { id: 1, title: 'my second post', body: 'second post body' }
    ]);
  });
});
