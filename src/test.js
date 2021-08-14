const wrappedFn = (dispatch) => {
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

export const getIncomesCats = () => wrappedFn;

// dispatch(getIncomesCats());
dispatch(wrappedFn);
