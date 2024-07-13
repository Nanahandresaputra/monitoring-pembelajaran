import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import loadingReducer from "./reducer/loading";
import authReducer from "./reducer/auth";
import dashboardReducer from "./reducer/dashboard";
import akademikReducer from "./reducer/akademik";
import usersReducer from "./reducer/user-admin";
import mahasiswaReducer from "./reducer/mahasiswa";
import dosenReducer from "./reducer/dosen";

const rootReducer = combineReducers({
  loadingData: loadingReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  akademik: akademikReducer,
  admin: usersReducer,
  mahasiswa: mahasiswaReducer,
  dosen: dosenReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
