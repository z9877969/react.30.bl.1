import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import mainInfoData from "../../assets/mainInfo.json";
import Section from "../_share/Section/Section";
import { useHistory } from "react-router-dom";

const { balanceInfoData, costsInfoData, incomesInfoData } = mainInfoData;

const btnArgs = {
  costs: ["costs"],
  incomes: ["incomes"],
};

const MainPage = ({ handleOpenTransaction }) => {
  const { push, location } = useHistory();

  const handleOpenTransListPerPeriod = (transType) => {
    push({
      pathname: "/trans-list" + "/" + transType,
      state: {
        from: location,
      },
    });
  };

  return (
    <Section>
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
      <Button
        title="Все доходы"
        cbOnClick={handleOpenTransListPerPeriod}
        cbArgs={btnArgs.incomes}
      />
      <Button
        title="Все расходы"
        cbOnClick={handleOpenTransListPerPeriod}
        cbArgs={btnArgs.costs}
      />
    </Section>
  );
};

export default MainPage;
