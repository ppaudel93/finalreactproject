import {
  TOGGLE_LOGGED_IN,
  CHANGE_CURRENT_USER
} from "../../../static/JS/actionConstants";

const initialState = {
  loggedIn: false,
  currentUser: null
};

export const toggleLoggedIn = payload => {
  return { type: TOGGLE_LOGGED_IN, payload };
};

export const changeCurrentUser = payload => {
  return { type: CHANGE_CURRENT_USER, payload };
};

const navBarReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_LOGGED_IN) {
    return { ...state, loggedIn: action.payload };
  }
  if (action.type === CHANGE_CURRENT_USER) {
    return { ...state, currentUser: action.payload };
  }
  return state;
};
export default navBarReducer;
