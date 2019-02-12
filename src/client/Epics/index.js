import { combineEpics } from "redux-observable";
import { loginEpic } from "../Components/Login/loginModule";
import { registerEpic } from "../Components/SignUp/signupModule";

export default combineEpics(loginEpic, registerEpic);
