import { createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  getCostsError,
  addIncomesError,
  getIncomesError,
  addCostsRequest,
  getCostsRequest,
  addIncomesRequest,
  getIncomesRequest,
  addCostsSuccess,
  getCostsSuccess,
  addIncomesSuccess,
  getIncomesSuccess,
} from "../transactions/transactionsActions";

// const setError = (_, { payload }) => payload;
// const unsetError = () => null;

export const isLoading = createReducer(false, {
  [addCostsError]: () => false,
  [getCostsError]: () => false,
  [addIncomesError]: () => false,
  [getIncomesError]: () => false,
  [addCostsRequest]: () => true,
  [getCostsRequest]: () => true,
  [addIncomesRequest]: () => true,
  [getIncomesRequest]: () => true,
  [addCostsSuccess]: () => false,
  [getCostsSuccess]: () => false,
  [addIncomesSuccess]: () => false,
  [getIncomesSuccess]: () => false,
});
