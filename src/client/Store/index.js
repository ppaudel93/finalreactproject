import { createStore, compose, applyMiddleware } from "redux";
import CombineReducer from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

//const configureStore = ()
const store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware())
);
export default store;
