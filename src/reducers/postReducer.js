import {
  CREATE_POST
} from '../actions/postActions';

const initialState = [];

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
