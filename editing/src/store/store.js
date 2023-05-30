import { combineReducers, compose, legacy_createStore } from "redux";

import serviceAddReducer from "../redux/serviceAddReducer";
import serviceListReducer from "../redux/serviceListReducer";
import serviceFilterReducer from "../redux/serviceFilterReducer";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureService() {
  return legacy_createStore(
    combineReducers({
      serviceList: serviceListReducer,
      serviceAdd: serviceAddReducer,
      serviceFilter: serviceFilterReducer
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureService;
