import { createAction } from "@reduxjs/toolkit";

export const getCostsCatRequest = createAction("categories/getCostsCatRequest");
export const getCostsCatSuccess = createAction("categories/getCostsCatSuccess");
export const getCostsCatError = createAction("categories/getCostsCatError");

export const getIncomesCatRequest = createAction(
  "categories/getIncomesCatRequest"
);
export const getIncomesCatSuccess = createAction(
  "categories/getIncomesCatSuccess"
);
export const getIncomesCatError = createAction("categories/getIncomesCatError");

export const addCostsCatRequest = createAction("categories/addCostsCatRequest");
export const addCostsCatSuccess = createAction("categories/addCostsCatSuccess");
export const addCostsCatError = createAction("categories/addCostsCatError");

export const addIncomesCatRequest = createAction(
  "categories/addIncomesCatRequest"
);
export const addIncomesCatSuccess = createAction(
  "categories/addIncomesCatSuccess"
);
export const addIncomesCatError = createAction("categories/addIncomesCatError");

export const getCostsCatEmpty = createAction("categories/getCostsCatEmpty");
export const getIncomesCatEmpty = createAction("categories/getIncomesCatEmpty");
