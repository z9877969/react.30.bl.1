import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/";

export const getTransactions = (apiEnd) => {
  return axios
    .get(apiEnd)
    .then(({ data }) => data)
    .catch((err) => console.log("err getTransactions :>> ", err));
};

export const postTransaction = ({apiEnd, transaction}) => {
    return axios
      .post(apiEnd, transaction)
      .then(({ data }) => data)
      .catch((err) => console.log("err getTransactions :>> ", err));
  };

  export const getTransactionsCats = (apiEnd) => {
    return axios
      .get(apiEnd)
      .then(({ data }) => data)
      .catch((err) => console.log("err getTransactionsCats :>> ", err));
  };

  export const postTransactionCat = ({apiEnd, category}) => {
    return axios
      .post(apiEnd, category)
      .then(({ data }) => data)
      .catch((err) => console.log("err postTransactionCat :>> ", err));
  };
