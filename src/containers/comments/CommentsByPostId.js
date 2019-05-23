import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelectors';
import { deleteComment } from '../../actions/commentActions';
import Comments from '../../components/comments/Comments';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  deleteComment(commentId) {
    dispatch(deleteComment(postId, commentId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
