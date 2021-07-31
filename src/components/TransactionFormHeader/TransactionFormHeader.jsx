import Button from "../_share/Button/Button";

const TransactionFormHeader = ({ title, handleGoBack }) => {
  

  
  return (
    <header>
      <Button title="GoBack" cbOnClick={handleGoBack} />
      <h1>{title}</h1>
    </header>
  );
};

export default TransactionFormHeader;
