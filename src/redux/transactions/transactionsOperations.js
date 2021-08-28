import { getTransactions, postTransaction } from "../../utils/apiService";
import { addTransactionApi, getTransactionsApi } from "../../utils/fireBaseApi";
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

import { getError } from "../error/errorHandler";

export const getCosts = () => (dispatch, getStore) => {
  dispatch(getCostsRequest());

  const {
    auth: {
      user: { idToken, localId },
    },
  } = getStore();
  getTransactionsApi({
    transType: "costs",
    localId,
    idToken,
  })
    .then((transactions) => dispatch(getCostsSuccess(transactions)))
    .catch((e) =>
      dispatch(
        getError({
          error: e,
          actionType: "transactions/getCostsError",
          requestCb: getIncomes,
          requestData: null,
        })
        // getCostsError(e.message))
      )
    );
};

export const getIncomes = () => (dispatch, getStore) => {
  dispatch(getIncomesRequest());

  const {
    auth: {
      user: { idToken, localId },
    },
  } = getStore();
  getTransactionsApi({
    transType: "incomes",
    localId,
    idToken,
  })
    .then((transactions) => {
      dispatch(getIncomesSuccess(transactions));
    })
    .catch(
      dispatch(
        getError({
          error: e,
          actionType: "transactions/getIncomesError",
          requestCb: getIncomes,
          requestData: null,
        })
      )
      // (e) => dispatch(getIncomesError(e.message))
    );
};

export const addTransaction =
  ({ transType, transaction }) =>
  (dispatch, getStore) => {
    transType === "incomes" && dispatch(addIncomesRequest());
    transType === "costs" && dispatch(addCostsRequest());

    const {
      auth: {
        user: { idToken, localId },
      },
    } = getStore();

    addTransactionApi({ transaction, transType, localId, idToken })
      .then((transaction) => {
        transType === "incomes"
          ? dispatch(addIncomesSuccess(transaction))
          : dispatch(addCostsSuccess(transaction));
      })
      .catch((e) =>
        dispatch(
          getError({
            error: e,
            actionType:
              transType === "incomes"
                ? "transactions/addIncomesError"
                : "transactions/addCostsError",
            requestCb: addTransaction,
            requestData: { transaction, transType, localId, idToken },
          })
        )
      );
  };
