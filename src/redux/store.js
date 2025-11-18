import rootReducer from "./root-rducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
