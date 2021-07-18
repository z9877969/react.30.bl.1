import { useEffect, useState } from "react";
import moment from "moment";
import TransactionFormHeader from "../TransactionFormHeader/TransactionFormHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import Section from "../_share/Section/Section";
import TransactionsCategories from "../TransactionsCategories/TransactionsCategories";
import {
  incomesCat as incomesCatOpts,
  costsCat as costsCatOpts,
} from "../../assets/categoriesList.json";
import {
  getTransactionsCats,
  postTransactionCat,
} from "../../utils/apiService";

const TransactionPage = ({
  transType,
  incomesCat,
  costsCat,
  handleCloseTransaction,
  handleAddTransaction,
  setCategory,
  setCategories,
}) => {
  const [isCatList, setIsCatList] = useState(false);
  const [dataForm, setDataForm] = useState({
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm"),
    category:
      transType === "incomes" ? incomesCatOpts[0]?.name : costsCatOpts[0]?.name,
    sum: "",
    currency: "UAH",
    comment: "",
  });

  const categories = transType === "incomes" ? incomesCat : costsCat;

  const handlePostDataForm = (e) => {
    e.preventDefault();
    handleAddTransaction({ transaction: dataForm, transType });
    handleCloseTransaction();
  };

  const handleChangeDataForm = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleCatList = () => setIsCatList((prev) => !prev);

  const handleChangeCategory = (e) => {
    const { name } = e.target;
    setDataForm((prev) => ({ ...prev, category: name }));
    handleToggleCatList();
  };

  const addCategory = (category) =>
    postTransactionCat({ apiEnd: transType + "Cat", category }).then(
      (category) => setCategory({ transType, category })
    );

  useEffect(() => {
    transType === "incomes" &&
      incomesCat.length === 0 &&
      getTransactionsCats("incomesCat").then((categories) => {
        if (categories.length === 0) {
          incomesCatOpts.forEach((category) => addCategory(category));
        } else {
          setCategories({ transType, categories });
        }
      });
    transType === "costs" &&
      costsCat.length === 0 &&
      getTransactionsCats("costsCat").then((categories) => {
        if (categories.length === 0) {
          costsCatOpts.forEach((category) => addCategory(category));
        } else {
          setCategories({ transType, categories });
        }
      });
  }, []);

  return (
    <>
      <h1>TransactionPage</h1>
      {!isCatList ? (
        <Section>
          <TransactionFormHeader
            title={transType === "costs" ? "Расходы" : "Доходы"}
            handleCloseTransaction={handleCloseTransaction}
          />
          <TransactionForm
            dataForm={dataForm}
            handlePostDataForm={handlePostDataForm}
            handleToggleCatList={handleToggleCatList}
            handleChangeDataForm={handleChangeDataForm}
          />
        </Section>
      ) : (
        <Section>
          <TransactionsCategories
            categories={categories}
            handleToggleCatList={handleToggleCatList}
            handleChangeCategory={handleChangeCategory}
            addCategory={addCategory}
          />
        </Section>
      )}
    </>
  );
};

export default TransactionPage;
