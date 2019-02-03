import { createStore, compose, applyMiddleware } from "redux";
import CombineReducer from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootEpic from "../Epics";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";

//const configureStore = ()
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);
export default store;
