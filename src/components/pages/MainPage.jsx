import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import mainInfoData from "../../assets/mainInfo.json";

const { balanceInfoData, costsInfoData, incomesInfoData } = mainInfoData;

const MainPage = ({ handleOpenTransaction }) => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo
        transType="costs"
        title={"Расходы"}
        currency={"UAH"}
        dataInfo={costsInfoData}
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo
        transType="incomes"
        title={"Доходы"}
        currency={"UAH"}
        dataInfo={incomesInfoData}
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo title={"Баланс"} currency={"UAH"} dataInfo={balanceInfoData} />
      <Button title="Все доходы" />
      <Button title="Все расходы" />
    </>
  );
};

export default MainPage;
