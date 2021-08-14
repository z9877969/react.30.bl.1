import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getIncomesCatSuccess,
  getCostsCatSuccess,
  addCostsCatSuccess,
  addIncomesCatSuccess,
  getCostsCatEmpty,
  getIncomesCatEmpty,
} from "./categoriesActions";

const iS = {
  incomesCat: [],
  costsCat: [],
  isEmpty: {
    costs: false,
    incomes: false,
  },
};

const incomesCat = createReducer(iS.incomesCat, {
  [getIncomesCatSuccess]: (_, { payload }) => payload,
  [addIncomesCatSuccess]: (state, { payload }) => [...state, payload],
});

const costsCat = createReducer(iS.costsCat, {
  [getCostsCatSuccess]: (_, { payload }) => payload,
  [addCostsCatSuccess]: (state, { payload }) => [...state, payload],
});

const isEmpty = createReducer(iS.isEmpty, {
  [getCostsCatEmpty]: (state, { payload }) => ({ ...state, costs: payload }),
  [getIncomesCatEmpty]: (state, { payload }) => ({
    ...state,
    incomes: payload,
  }),
});

const categories = combineReducers({
  incomesCat,
  costsCat,
  isEmpty,
});

export default categories;
