import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import menuReducer from "./reducer/menu-reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = combineReducers({
  menus: menuReducer,
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
