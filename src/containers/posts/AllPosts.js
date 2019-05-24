import { connect } from 'react-redux';
import { getPosts } from '../../selectors/postSelectors';
import { deletePost } from '../../actions/postActions';
import Posts from '../../components/posts/Posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchTpProps = dispatch => ({
  deletePost(id) {
    dispatch(deletePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(Posts);
