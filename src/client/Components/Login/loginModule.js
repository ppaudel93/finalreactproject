import {
  CHANGE_EMAIL_LOGIN,
  CHANGE_PASSWORD_LOGIN
} from "../../../static/JS/actionConstants";

const initialState = { email: "", password: "" };

export const changeEmailLogin = payload => {
  return { type: CHANGE_EMAIL_LOGIN, payload };
};

export const changePasswordLogin = payload => {
  return { type: CHANGE_PASSWORD_LOGIN, payload };
};

const loginReducer = (state = initialState, action) => {
  if (action.type === CHANGE_EMAIL_LOGIN) {
    return {
      ...state,
      email: action.payload
    };
  }
  if (action.type === CHANGE_PASSWORD_LOGIN) {
    return {
      ...state,
      password: action.payload
    };
  }
  return state;
};
export default loginReducer;
