import {
  TOGGLE_LOGGED_IN,
  CHANGE_CURRENT_USER,
  CHANGE_WORD_NUM,
  CHANGE_GIF_NUM
} from "../../../static/JS/actionConstants";

let loggedin;
let currentuser;
if (typeof localStorage !== "object") {
  loggedin = false;
  currentuser = "";
} else {
  loggedin = Boolean(localStorage.getItem("LOGGED_IN"));
  currentuser = localStorage.getItem("CURRENT_USER");
}
const initialState = {
  loggedIn: loggedin,
  currentUser: currentuser,
  wordNum: 1,
  gifNum: 1
};

export const toggleLoggedIn = payload => {
  return { type: TOGGLE_LOGGED_IN, payload };
};

export const changeCurrentUser = payload => {
  return { type: CHANGE_CURRENT_USER, payload };
};

export const changeWordNum = payload => {
  return { type: CHANGE_WORD_NUM, payload };
};

export const changeGifNum = payload => {
  return { type: CHANGE_GIF_NUM, payload };
};

const navBarReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_LOGGED_IN) {
    return { ...state, loggedIn: action.payload };
  }
  if (action.type === CHANGE_CURRENT_USER) {
    return { ...state, currentUser: action.payload };
  }
  if (action.type === CHANGE_WORD_NUM) {
    return { ...state, wordNum: action.payload };
  }
  if (action.type === CHANGE_GIF_NUM) {
    return { ...state, gifNum: action.payload };
  }
  return state;
};
export default navBarReducer;
