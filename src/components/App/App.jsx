import { useEffect, useState } from "react";
import { getTransactions, postTransaction } from "../../utils/apiService";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import "./App.css";

const App = () => {
  const [incomes, setIncomes] = useState([]);
  const [costs, setCosts] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState("");
  const [incomesCat, setIncomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);

  const handleOpenTransaction = (transType) => setCurrentTransaction(transType);
  const handleCloseTransaction = () => setCurrentTransaction("");

  const handleAddTransaction = ({ transaction, transType }) => {
    transType === "incomes" &&
      postTransaction({ apiEnd: transType, transaction }).then((transaction) =>
        setIncomes((prev) => [...prev, transaction])
      );
    transType === "costs" &&
      postTransaction({ apiEnd: transType, transaction }).then((transaction) =>
        setCosts((prev) => [...prev, transaction])
      );
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
    getTransactions("incomes").then((transactions) => setIncomes(transactions));
    getTransactions("costs").then((transactions) => setCosts(transactions));
  }, []);

  return (
    <>
      <h1>App</h1>
      {!currentTransaction ? (
        <MainPage handleOpenTransaction={handleOpenTransaction} />
      ) : (
        <TransactionPage
          incomesCat={incomesCat}
          costsCat={costsCat}
          transType={currentTransaction}
          handleCloseTransaction={handleCloseTransaction}
          handleAddTransaction={handleAddTransaction}
          setCategory={setCategory}
          setCategories={setCategories}
        />
      )}
    </>
  );
};

export default App;
