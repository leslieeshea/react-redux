import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {

}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
};
