import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCostsSuccess,
  getIncomesSuccess,
  addCostsSuccess,
  addIncomesSuccess,
} from "./transactionsActions";

const iS = {
  costs: [],
  incomes: [],
};

const costs = createReducer(iS.costs, {
  [getCostsSuccess]: (_, action) => action.payload,
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
});

const incomes = createReducer(iS.incomes, {
  [getIncomesSuccess]: (_, action) => action.payload,
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
});

const transactions = combineReducers({
  costs,
  incomes,
});

export default transactions;
