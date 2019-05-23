import {
  CREATE_COMMENT
} from '../actions/commentActions';

export default function commentReducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postId]: [
          ...(state[action.payload.postId] || []),
          action.payload.comment
        ]
      };
  }
}
