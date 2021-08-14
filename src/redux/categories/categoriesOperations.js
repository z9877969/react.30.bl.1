import {
  getTransactionsCats,
  postTransactionCat,
} from "../../utils/apiService";
import {
  getIncomesCatRequest,
  getIncomesCatSuccess,
  getIncomesCatError,
  getCostsCatRequest,
  getCostsCatSuccess,
  getCostsCatError,
  getIncomesCatEmpty,
  addIncomesCatRequest,
  addIncomesCatSuccess,
  addIncomesCatError,
  addCostsCatRequest,
  addCostsCatSuccess,
  addCostsCatError,
  getCostsCatEmpty,
} from "./categoriesActions";

export const getIncomesCats = () => (dispatch) => {
  dispatch(getIncomesCatRequest());

  getTransactionsCats("incomesCat")
    .then((categories) => {
      if (categories.length > 0) {
        dispatch(getIncomesCatSuccess(categories));
      } else {
        dispatch(getIncomesCatEmpty(true));
      }
    })
    .catch((e) => dispatch(getIncomesCatError(e)));
};

export const getCostsCats = () => (dispatch) => {
  dispatch(getCostsCatRequest());

  getTransactionsCats("costsCat")
    .then((categories) => {
      if (categories.length > 0) {
        dispatch(getCostsCatSuccess(categories));
      } else {
        dispatch(getCostsCatEmpty(true));
      }
    })
    .catch((e) => dispatch(getCostsCatError(e)));
};

export const addCategory =
  ({ transType, category }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesCatRequest())
      : dispatch(addCostsCatRequest());

    postTransactionCat({ apiEnd: transType + "Cat", category })
      .then((category) => {
        transType === "incomes"
          ? dispatch(addIncomesCatSuccess(category))
          : dispatch(addCostsCatSuccess(category));
      })
      .catch((e) => {
        transType === "incomes"
          ? dispatch(addIncomesCatError(e))
          : dispatch(addCostsCatError(e));
      });
  };
