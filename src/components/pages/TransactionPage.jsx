import { useEffect, useState } from "react";
import moment from "moment";
import {
  Route,
  Switch,
  useHistory,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { addTransaction } from "../../redux/transactions/transactionsOperations";
import {
  getCategories,
  getIsEmpty,
} from "../../redux/categories/categoriesSelector";
import {
  getCostsCats,
  getIncomesCats,
  addCategory,
} from "../../redux/categories/categoriesOperations";
import {
  getCostsCatEmpty,
  getIncomesCatEmpty,
} from "../../redux/categories/categoriesActions";

const TransactionPage = ({
  // incomesCat,
  // costsCat,
  // handleAddTransaction,
  setCategory,
  setCategories,
}) => {
  const dispatch = useDispatch();
  const { push, location } = useHistory();
  const match = useRouteMatch();
  const { transType } = useParams();

  const { incomesCat, costsCat } = useSelector(getCategories);
  const { costs: isCostsEmpty, incomes: isIncomesEmpty } =
    useSelector(getIsEmpty);

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
    dispatch(addTransaction({ transType, transaction: dataForm }));
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

  const handlerAddCategory = (category) =>
    dispatch(addCategory({ transType, category }));

  useEffect(() => {
    transType === "incomes" &&
      incomesCat.length === 0 &&
      dispatch(getIncomesCats());

    transType === "costs" && costsCat.length === 0 && dispatch(getCostsCats());
  }, []);

  useEffect(() => {
    isCostsEmpty &&
      costsCatOpts.forEach((category, idx) => {
        idx === 0 && dispatch(getCostsCatEmpty(false));
        dispatch(addCategory({ transType, category }));
      });
    isIncomesEmpty &&
      incomesCatOpts.forEach((category, idx) => {
        idx === 0 && dispatch(getIncomesCatEmpty(false));
        dispatch(addCategory({ transType, category }));
      });
  }, [isCostsEmpty, isIncomesEmpty]);

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
              handlerAddCategory={handlerAddCategory}
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
