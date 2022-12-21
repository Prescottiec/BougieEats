import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const SessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = [];
      return nextState;
    case RECEIVE_SESSION_ERRORS:
      nextState = action.errors.responseJSON;
      return nextState;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default SessionErrorsReducer
