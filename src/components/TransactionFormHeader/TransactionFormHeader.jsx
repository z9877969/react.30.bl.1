import Button from "../_share/Button/Button";

const TransactionFormHeader = ({ title, handleCloseTransaction }) => {
  return (
    <header>
      <Button title="GoBack" cbOnClick={handleCloseTransaction} />
      <h1>{title}</h1>
    </header>
  );
};

export default TransactionFormHeader;
