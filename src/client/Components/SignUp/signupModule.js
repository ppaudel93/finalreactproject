import {
  CHANGE_ADDRESS_REGISTER,
  CHANGE_BIRTHDAY_REGISTER,
  CHANGE_COUNTRY_REGISTER,
  CHANGE_EMAIL_CONFIRM_REGISTER,
  CHANGE_FIRSTNAME_REGISTER,
  CHANGE_EMAIL_REGISTER,
  CHANGE_GENDER_REGISTER,
  CHANGE_LASTNAME_REGISTER,
  CHANGE_PASSWORD_CONFIRM_REGISTER,
  CHANGE_PASSWORD_REGISTER,
  REGISTER
} from "../../../static/JS/actionConstants";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, mergeMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";

const initialState = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  birthday: null,
  gender: "",
  country: "",
  address: ""
};
export const changeEmailRegister = payload => {
  return { type: CHANGE_EMAIL_REGISTER, payload };
};

export const changePasswordRegister = payload => {
  return { type: CHANGE_PASSWORD_REGISTER, payload };
};

export const changeEmailConfirmRegister = payload => {
  return { type: CHANGE_EMAIL_CONFIRM_REGISTER, payload };
};

export const changePasswordConfirmRegister = payload => {
  return { type: CHANGE_PASSWORD_CONFIRM_REGISTER, payload };
};

export const changeAddressRegister = payload => {
  return { type: CHANGE_ADDRESS_REGISTER, payload };
};

export const changeBirthdayRegister = payload => {
  return { type: CHANGE_BIRTHDAY_REGISTER, payload };
};

export const changeCountryRegister = payload => {
  return { type: CHANGE_COUNTRY_REGISTER, payload };
};

export const changeFirstnameRegister = payload => {
  return { type: CHANGE_FIRSTNAME_REGISTER, payload };
};

export const changeLastnameRegister = payload => {
  return { type: CHANGE_LASTNAME_REGISTER, payload };
};

export const changeGenderRegister = payload => {
  return { type: CHANGE_GENDER_REGISTER, payload };
};

export const register = data => {
  return { type: REGISTER, data };
};

const signupReducer = (state = initialState, action) => {
  if (action.type === CHANGE_ADDRESS_REGISTER) {
    return {
      ...state,
      address: action.payload
    };
  }
  if (action.type === CHANGE_BIRTHDAY_REGISTER) {
    return {
      ...state,
      birthday: action.payload
    };
  }
  if (action.type === CHANGE_COUNTRY_REGISTER) {
    return {
      ...state,
      country: action.payload
    };
  }
  if (action.type === CHANGE_EMAIL_CONFIRM_REGISTER) {
    return {
      ...state,
      confirmEmail: action.payload
    };
  }
  if (action.type === CHANGE_FIRSTNAME_REGISTER) {
    return {
      ...state,
      firstname: action.payload
    };
  }
  if (action.type === CHANGE_EMAIL_REGISTER) {
    return {
      ...state,
      email: action.payload
    };
  }
  if (action.type === CHANGE_GENDER_REGISTER) {
    return {
      ...state,
      gender: action.payload
    };
  }
  if (action.type === CHANGE_LASTNAME_REGISTER) {
    return {
      ...state,
      lastname: action.payload
    };
  }
  if (action.type === CHANGE_PASSWORD_CONFIRM_REGISTER) {
    return {
      ...state,
      confirmPassword: action.payload
    };
  }
  if (action.type === CHANGE_PASSWORD_REGISTER) {
    return {
      ...state,
      password: action.payload
    };
  }
  return state;
};
export default signupReducer;

const handleRegisterResponse = response => {
  const resp = response.response;
  if (resp.success === true) {
    alert("Success");
    window.location = "/login";
  } else {
    console.log("Error");
    alert("Registration Failed. The user already exists.");
  }
  return of({ type: "" });
};

export const registerEpic = action$ => {
  return action$.pipe(
    ofType(REGISTER),
    switchMap(action =>
      ajax
        .post(
          "/signup",
          { data: action.data },
          { "Content-Type": "application/json" }
        )
        .pipe(
          mergeMap(response => handleRegisterResponse(response)),
          catchError(err => console.log(err))
        )
    )
  );
};
