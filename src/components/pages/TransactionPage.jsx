import TransactionFormHeader from "../TransactionFormHeader/TransactionFormHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import { Component } from "react";

const TransactionPage = ({ transType, handleCloseTransaction }) => {
  //   state = {
  //     dataForm: {},
  //   };

  const handlePostDataForm = (dataForm) => {
    const prevData = localStorage.getItem(transType);
    const parsePrevData = JSON.parse(prevData);
    const dataToLS = parsePrevData ? [...parsePrevData, dataForm] : [dataForm];
    localStorage.setItem(transType, JSON.stringify(dataToLS));
    handleCloseTransaction()
  };

  return (
    <>
      <h1>TransactionPage</h1>
      <TransactionFormHeader
        title={transType === "costs" ? "Расходы" : "Доходы"}
        handleCloseTransaction={handleCloseTransaction}
      />
      <TransactionForm handlePostDataForm={handlePostDataForm} />
    </>
  );
};

export default TransactionPage;
