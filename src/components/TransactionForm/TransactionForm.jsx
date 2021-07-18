import { Component } from "react";
import moment from "moment";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";

const TransactionForm = ({
  dataForm,
  handleChangeDataForm,
  handleToggleCatList,
  handlePostDataForm,
}) => {
  const { date, time, category, sum, currency, comment } = dataForm;

  return (
    <form onSubmit={handlePostDataForm}>
      <Button type="submit" title="OK" />
      <LabelInput
        cbOnChange={handleChangeDataForm}
        type="date"
        title="Date"
        name="date"
        value={date}
      />
      <LabelInput
        cbOnChange={handleChangeDataForm}
        type="time"
        title="Time"
        name="time"
        value={time}
      />
      <LabelInput
        cbOnClick={handleToggleCatList}
        type="button"
        title="Category"
        name="category"
        value={category}
      />
      <LabelInput
        cbOnChange={handleChangeDataForm}
        title="Sum"
        name="sum"
        value={sum}
        placeholder="Введите сумму"
      />
      <LabelInput
        cbOnChange={handleChangeDataForm}
        type="button"
        title="Currency"
        name="currency"
        value={currency}
      />
      <LabelInput
        cbOnChange={handleChangeDataForm}
        title="Comment"
        name="comment"
        value={comment}
        placeholder="Введите комментарий"
      />
    </form>
  );
};

export default TransactionForm;
