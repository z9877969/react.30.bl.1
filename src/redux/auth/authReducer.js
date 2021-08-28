import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  setIsAuth,
  refreshSuccess,
} from "./authActions";

const iS = {
  email: "",
  idToken: "",
  localId: "",
  refreshToken: "",
};

const userReducer = createReducer(iS, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [refreshSuccess]: (state, { payload }) => ({ ...state, ...payload }),
});

const authReduser = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [setIsAuth]: (_, { payload }) => payload,
});

export default combineReducers({
  user: userReducer,
  isAuth: authReduser,
});
