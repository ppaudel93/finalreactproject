import loginReducer from "../Components/Login/loginModule";
import signupReducer from "../Components/SignUp/signupModule";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  login: loginReducer,
  register: signupReducer
});
export default (state,action)=>appReducer(state,action);
