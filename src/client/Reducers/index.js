import loginReducer from "../Components/Login/loginModule";
import signupReducer from "../Components/SignUp/signupModule";
import { combineReducers } from "redux";
import navBarReducer from "../Components/AppBar/navBarModule";

const appReducer = combineReducers({
  login: loginReducer,
  register: signupReducer,
  navBar: navBarReducer
});
export default (state, action) => appReducer(state, action);
