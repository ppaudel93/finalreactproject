import { createStore, applyMiddleware } from "redux";
import CombineReducer from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootEpic from "../Epics";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();
const configureStore = () => {
  const store = createStore(
    CombineReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
};

export default configureStore;
