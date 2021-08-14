import { getTransactions, postTransaction } from "../../utils/apiService";
import {
  getCostsError,
  getCostsRequest,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequest,
  getIncomesSuccess,
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
} from "./transactionsActions";

export const getCosts = () => (dispatch) => {
  dispatch(getCostsRequest());
  getTransactions("costs")
    .then((transactions) => dispatch(getCostsSuccess(transactions)))
    .catch((e) => dispatch(getCostsError(e.message)));
};

export const getIncomes = () => (dispatch) => {
  dispatch(getIncomesRequest());
  getTransactions("incomes")
    .then((transactions) => dispatch(getIncomesSuccess(transactions)))
    .catch((e) => dispatch(getIncomesError(e.message)));
};

export const addTransaction =
  ({ transType, transaction }) =>
  (dispatch) => {
    transType === "incomes" && dispatch(addIncomesRequest());
    transType === "costs" && dispatch(addCostsRequest());

    postTransaction({ apiEnd: transType, transaction })
      .then((transaction) => {
        transType === "incomes"
          ? dispatch(addIncomesSuccess(transaction))
          : dispatch(addCostsSuccess(transaction));
      })
      .catch((e) => {
        transType === "incomes"
          ? dispatch(addIncomesError(e.message))
          : dispatch(addCostsError(e.message));
      });
  };
