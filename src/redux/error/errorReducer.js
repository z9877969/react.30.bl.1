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
} from "../transactions/transactionsActions";

const setError = (_, { payload }) => payload;
const unsetError = () => null;

export const error = createReducer(null, {
  [addCostsError]: setError,
  [getCostsError]: setError,
  [addIncomesError]: setError,
  [getIncomesError]: setError,
  [addCostsRequest]: unsetError,
  [getCostsRequest]: unsetError,
  [addIncomesRequest]: unsetError,
  [getIncomesRequest]: unsetError,
});
