import { useEffect, useState } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions, postTransaction } from "../../utils/apiService";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import TransactionsListPerPeriodPage from "../pages/TransactionsListPerPeriodPage";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperations";
import "./App.css";
import AuthPage from "../pages/AuthPage";
import { setIsAuth } from "../../redux/auth/authActions";
import { refresh } from "../../utils/fireBaseApi";

const App = () => {
  const dispatch = useDispatch();
  const [incomesCat, setIncomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const refreshToken = useSelector((state) => state.auth.user.refreshToken);

  const handleAddTransaction = ({ transaction, transType }) => {
    // transType === "incomes" &&
    //   postTransaction({ apiEnd: transType, transaction }).then((transaction) =>
    //     setIncomes((prev) => [...prev, transaction])
    //   );
    // transType === "costs" &&
    //   postTransaction({ apiEnd: transType, transaction }).then((transaction) =>
    //     setCosts((prev) => [...prev, transaction])
    //   );
  };

  const setCategory = ({ transType, category }) => {
    transType === "incomes" && setIncomesCat((prev) => [...prev, category]);
    transType === "costs" && setCostsCat((prev) => [...prev, category]);
  };

  const setCategories = ({ transType, categories }) => {
    transType === "incomes" && setIncomesCat(categories);
    transType === "costs" && setCostsCat(categories);
  };

  useEffect(() => {
    const isAuth = localStorage.isAuth || false;
    dispatch(setIsAuth(isAuth));
  }, []);

  useEffect(() => {
    if (isAuth) {
      dispatch(getCosts());
      dispatch(getIncomes());
    }
    localStorage.isAuth = isAuth;
    // isAuth && refresh(refreshToken);
  }, [isAuth]);

  return (
    <>
      {!isAuth ? (
        <ul>
          <li>
            <NavLink to="/auth/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/auth/register">Register</NavLink>
          </li>
        </ul>
      ) : null}
      {isAuth ? (
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/transaction/:transType">
            <TransactionPage
              incomesCat={incomesCat}
              costsCat={costsCat}
              handleAddTransaction={handleAddTransaction}
              setCategory={setCategory}
              setCategories={setCategories}
            />
          </Route>
          <Route
            path="/trans-list/:transType"
            component={TransactionsListPerPeriodPage}
          />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/auth/:authType" component={AuthPage} />
          <Redirect to="/auth/login" />
        </Switch>
      )}
    </>
  );
};

export default App;
