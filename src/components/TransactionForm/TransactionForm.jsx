import { Component } from "react";
import moment from "moment";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";

class TransactionForm extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm"),
    category: "",
    sum: "",
    currency: "UAH",
    comment: "",
  };

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handlePostDataForm(this.state);
  };

  render() {
    const { date, time, category, sum, currency, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <LabelInput
          cbOnChange={this.handleChangeInput}
          type="date"
          title="Date"
          name="date"
          value={date}
        />
        <LabelInput
          cbOnChange={this.handleChangeInput}
          type="time"
          title="Time"
          name="time"
          value={time}
        />
        <LabelInput
          cbOnChange={this.handleChangeInput}
          type="category"
          title="Category"
          name="category"
          value={category}
        />
        <LabelInput
          cbOnChange={this.handleChangeInput}
          type="sum"
          title="Sum"
          name="sum"
          value={sum}
          placeholder="Введите сумму"
        />
        <LabelInput
          cbOnChange={this.handleChangeInput}
          type="currency"
          title="Currency"
          name="currency"
          value={currency}
        />
        <LabelInput
          cbOnChange={this.handleChangeInput}
          type="comment"
          title="Comment"
          name="comment"
          value={comment}
          placeholder="Введите комментарий"
        />
        <Button type="submit" title="Submit" />
      </form>
    );
  }
}

export default TransactionForm;
