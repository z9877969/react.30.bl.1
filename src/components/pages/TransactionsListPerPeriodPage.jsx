import { NavLink } from "react-router-dom";
import Section from "../_share/Section/Section";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';

const options = [
  {
    title: "Месяц",
    value: "month",
  },
  {
    title: "Неделя",
    value: "week",
  },
  {
    title: "День",
    value: "day",
  },
  {
    title: "Год",
    value: "year",
  },
  {
    title: "Всё время",
    value: "allTime",
  },
];

const TransactionsListPerPeriodPage = () => {


  return (
    <Section>
      <ButtonGoBack title={"GoBack"} />
      <select name="period">
        {options.map(({ value, title }) => (
          <option value={value}>{title}</option>
        ))}
      </select>

      <Button title="<" />
      <LabelInput title="ИЮЛЬ 2021" type="date" name="date" />
      <Button title=">" />
      <table>
        <tr>
          <th>ВСЕГО</th>
          <th>{"allValue"}</th>
        </tr>
        <tr>
          <td>Transaction Name</td>
          <td>
            <span>Transaction Sum Value</span>
            <NavLink to="">{">"}</NavLink>
          </td>
        </tr>
      </table>
    </Section>
  );
};

export default TransactionsListPerPeriodPage;
