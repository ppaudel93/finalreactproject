import {
  CHANGE_EMAIL_LOGIN,
  CHANGE_PASSWORD_LOGIN,
  LOGIN
} from "../../../static/JS/actionConstants";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, mergeMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";

const initialState = {
  email: "",
  password: ""
};

export const changeEmailLogin = payload => {
  return { type: CHANGE_EMAIL_LOGIN, payload };
};

export const changePasswordLogin = payload => {
  return { type: CHANGE_PASSWORD_LOGIN, payload };
};

export const login = data => {
  return { type: LOGIN, data };
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

const handleLoginResponse = response => {
  const resp = response.response;
  console.log(resp);
  if (resp.success === true) {
    localStorage.setItem("LOGGED_IN", true);
    localStorage.setItem("CURRENT_USER", resp.data);
    //window.location = "/";
  } else {
    console.log("Error");
    alert("Username, Password or both seem to be incorrect.");
  }
  return of({ type: "" });
};

export const loginEpic = action$ => {
  return action$.pipe(
    ofType(LOGIN),
    switchMap(action =>
      ajax
        .post(
          "/login",
          { data: action.data },
          { "Content-Type": "application/json" }
        )
        .pipe(
          mergeMap(response => handleLoginResponse(response)),
          catchError(err => console.log(err))
        )
    )
  );
};

// export function loginEpic(action$) {
//   return action$.ofType(LOGIN).switchMap(action =>
//     ajax
//       .post(
//         "/login",
//         { data: action.data },
//         { "Content-Type": "application/json" }
//       )
//       .mergeMap(response => handleLoginResponse(response))
//       .catch(error => console.log(error))
//   );
// }
