import { configureStore, createReducer } from "@reduxjs/toolkit";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import { error } from "./error/errorReducer";
import { isLoading } from "./loader/loaderReducer";

// const reducer = createReducer(
//   { a: 0, b: "" },
//   {
//     ["actiontype"]: () => null,
//   }
// );

const store = configureStore({
  reducer: {
    transactions,
    categories,
    isLoading,
    error,
  },
});

export default store;
