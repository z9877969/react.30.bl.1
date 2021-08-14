import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../_share/Button/Button";

const TransactionsCategories = ({
  categories,
  handleGoBackFromList,
  handleChangeCategory,
  handlerAddCategory,
}) => {
  const [category, setCategory] = useState("");

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlerAddCategory({ name: category });
    setCategory("");
  };

  return (
    <>
      <Button title="GoBack" cbOnClick={handleGoBackFromList} />
      <h2>Категории</h2>
      <ul>
        {categories.map((el) => (
          <li key={el.name}>
            <button name={el.name} onClick={handleChangeCategory}>
              {el.name}
            </button>
            <button>...</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newCategory"
          value={category}
          onChange={handleChangeInput}
        />
        <Button title="Add" type="submit" />
      </form>
    </>
  );
};

export default TransactionsCategories;
