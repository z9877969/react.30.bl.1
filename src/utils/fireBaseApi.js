import axios from "axios";

const API_KEY = "AIzaSyDc8MYd3sZcwYx1_D9_7ur7YeFN5WxBZ5Y";

const BASE_URL_DB = "https://test-project-86606-default-rtdb.firebaseio.com/";
const BASE_URL_AUTH = "https://identitytoolkit.googleapis.com/v1/";
const BASE_URL_REFRESH = "https://securetoken.googleapis.com/v1";

axios.defaults.baseURL = BASE_URL_AUTH;

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

export const registerApi = (dataForm) => {
  setBaseUrl(BASE_URL_AUTH);
  return axios
    .post("accounts:signUp", dataForm, {
      params: {
        key: API_KEY,
      },
    })
    .then(({ data }) => {
      const { expiresIn, kind, ...dataStore } = data;
      return dataStore;
    })
    .catch((err) => {
      throw err;
    });
};

export const loginApi = (dataForm) => {
  setBaseUrl(BASE_URL_AUTH);
  return axios
    .post("accounts:signInWithPassword", dataForm, {
      params: {
        key: API_KEY,
      },
    })
    .then(({ data }) => {
      const { expiresIn, kind, ...dataStore } = data;
      return dataStore;
    })
    .catch((err) => {
      throw err;
    });
};

export const addTransactionApi = ({
  transaction,
  transType,
  localId,
  idToken,
}) => {
  setBaseUrl(BASE_URL_DB);
  // const date = Date.now();
  return axios
    .post(`/users/${localId}/transactions/${transType}.json`, transaction, {
      params: {
        auth: localStorage.date ? idToken : idToken + "qwe",
      },
    })
    .then(({ data: { name } }) => ({ ...transaction, id: name }))
    .catch((err) => {
      throw err;
    })
    .finally(() => (localStorage.date = "flag"));
};

const updateTransactionsObj = (obj) =>
  Object.entries(obj).map(([id, data]) => ({ id, ...data }));

export const getTransactionsApi = ({ transType, localId, idToken }) => {
  setBaseUrl(BASE_URL_DB);
  return axios
    .get(`/users/${localId}/transactions/${transType}.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data }) => updateTransactionsObj(data))
    .catch((err) => {
      throw err;
    });
};

export const refreshApi = (refreshToken) => {
  setBaseUrl(BASE_URL_REFRESH);
  return axios
    .post(
      "/token",
      { grant_type: "refresh_token", refresh_token: refreshToken },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(
      ({
        data: {
          id_token: idToken,
          refresh_token: refreshToken,
          user_id: localId,
        },
      }) => ({ idToken, refreshToken, localId })
    )
    .catch((err) => {
      throw err;
    });
};
