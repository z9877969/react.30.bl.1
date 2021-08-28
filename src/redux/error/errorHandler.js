import { refresh } from "../auth/authOperations";
import {
  addCostsError,
  addIncomesError,
  getCostsError,
  getIncomesError,
} from "../transactions/transactionsActions";

export const getError =
  ({ error, action, requestCb, requestData }) =>
  (dispatch) => {
    if ((error.status = 401)) {
      dispatch(refresh({ requestCb, requestData }));
    }

    switch (actionType) {
      case "transactions/addIncomesError":
        dispatch(addIncomesError(error.message));
        break;
      case "transactions/addCostsError":
        dispatch(addCostsError(error.message));
        break;
      case "transactions/getIncomesError":
        dispatch(getIncomesError(error.message));
        break;
      case "transactions/getCostsError":
        dispatch(getCostsError(error.message));
        break;
      default:
        break;
    }
  };
