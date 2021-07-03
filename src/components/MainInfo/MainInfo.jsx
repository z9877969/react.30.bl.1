const MainInfo = ({
  title,
  currency,
  dataInfo,
  transType,
  handleOpenTransaction,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <button onClick={() => handleOpenTransaction(transType)}>Add</button>
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
