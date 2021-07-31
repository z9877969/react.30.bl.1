import { useHistory } from "react-router-dom";
import css from "./MainInfo.module.css";

const MainInfo = ({
  title,
  currency,
  dataInfo,
  transType,
  // handleOpenTransaction,
}) => {
  const history = useHistory();

  const handleOpenTransaction = () => {
    const { location } = history;
    const newLocation = {
      pathname: "/transaction" + "/" + transType,
      state: { surprize: "surprize", from: location },
    };
    history.push(newLocation);
  };
  return (
    <section className={css.container}>
      <h2>{title}</h2>
      <button onClick={handleOpenTransaction}>Add</button>
      <span>{currency}</span>
      <ul>
        {dataInfo &&
          dataInfo.map((el) => (
            <li key={el.period}>
              <span>{el.period}</span>
              <span>{el.total}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MainInfo;
