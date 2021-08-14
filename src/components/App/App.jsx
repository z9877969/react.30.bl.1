import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTransactions, postTransaction } from "../../utils/apiService";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import TransactionsListPerPeriodPage from "../pages/TransactionsListPerPeriodPage";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperations";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const [incomesCat, setIncomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);

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
    dispatch(getCosts());
    dispatch(getIncomes());
  }, []);

  return (
    <>
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
      </Switch>
    </>
  );
};

export default App;
