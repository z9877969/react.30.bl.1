import { useEffect, useState } from "react";
import moment from "moment";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
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
import { useParams } from "react-router-dom";

const TransactionPage = ({
  incomesCat,
  costsCat,
  handleAddTransaction,
  setCategory,
  setCategories,
}) => {
  const { push, location } = useHistory();
  const match = useRouteMatch();
  const { transType } = useParams();
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

  const handleGoBack = () => push(location.state?.from || "/");
  const handleOpenCatList = () =>
    push({
      pathname: "/transaction" + "/" + transType + "/cat-list",
      state: { from: location },
    });
  const handleGoBackFromList = () => {
    push(location.state?.from || "/");
  };

  const handlePostDataForm = (e) => {
    e.preventDefault();
    handleAddTransaction({ transaction: dataForm, transType });
    handleGoBack();
  };

  const handleChangeDataForm = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeCategory = (e) => {
    const { name } = e.target;
    setDataForm((prev) => ({ ...prev, category: name }));
    handleGoBackFromList();
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
      <Switch>
        <Route path={match.path + "/cat-list"}>
          <Section>
            <TransactionsCategories
              categories={categories}
              handleGoBackFromList={handleGoBackFromList}
              handleChangeCategory={handleChangeCategory}
              addCategory={addCategory}
            />
          </Section>
        </Route>
        <Route path="/transaction/:transType">
          <Section>
            <TransactionFormHeader
              title={transType === "costs" ? "Расходы" : "Доходы"}
              handleGoBack={handleGoBack}
            />
            <TransactionForm
              dataForm={dataForm}
              handlePostDataForm={handlePostDataForm}
              handleOpenCatList={handleOpenCatList}
              handleChangeDataForm={handleChangeDataForm}
            />
          </Section>
        </Route>
      </Switch>
    </>
  );
};

export default TransactionPage;
