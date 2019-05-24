import React from 'react';
import CreatePost from '../containers/posts/CreatePost';
import AllPosts from '../containers/posts/AllPosts';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <h1>Posts</h1>
      <section className={styles.CreatePost}>
        <h2>Create Post</h2>
        <CreatePost />
      </section>

      <section>
        <AllPosts />
      </section>
    </>
  );
}
