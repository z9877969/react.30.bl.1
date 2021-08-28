import { configureStore, createReducer } from "@reduxjs/toolkit";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import { error } from "./error/errorReducer";
import { isLoading } from "./loader/loaderReducer";
import auth from "./auth/authReducer";

// const reducer = createReducer(
//   { a: 0, b: "" },
//   {
//     ["actiontype"]: () => null,
//   }
// );

const store = configureStore({
  reducer: {
    auth,
    transactions,
    categories,
    isLoading,
    error,
  },
});

export default store;
