import { loginApi, refreshApi, registerApi } from "../../utils/fireBaseApi";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} from "./authActions";

export const register = (data) => (dispatch) => {
  dispatch(registerRequest());

  registerApi(data)
    .then((data) => dispatch(registerSuccess(data)))
    .catch((err) => dispatch(registerError(err.message)));
};

export const login = (data) => (dispatch) => {
  dispatch(loginRequest());

  loginApi(data)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((err) => dispatch(loginError(err.message)));
};

export const refresh =
  ({ requestCb, requestData }) =>
  (dispatch, getStore) => {
    dispatch(refreshRequest());
    const { refreshToken } = getStore().auth.user;

    refreshApi(refreshToken)
      .then((data) => {
        dispatch(refreshSuccess(data));
        return data.idToken;
      })
      .then((idToken) => dispatch(requestCb({ ...requestData, idToken })))
      .catch((err) => dispatch(refreshError(err.message)));
  };
