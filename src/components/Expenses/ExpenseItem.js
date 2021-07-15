import "./ExpenseItem.css";
import CalendarDisplay from "../Calendar/CalendarDisplay";
import { useState } from "react";
import Card from "../Card/Card";
function ExpenseItem(props) {
  const { date, amount } = props.item;
  const [title, setTitle] = useState(props.item.title);

  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <div className="date">
        <CalendarDisplay date={date}></CalendarDisplay>
      </div>
      <div className="text">{title}</div>
      <div className="amount">{amount}</div>
      <button onClick={clickHandler}>Change text </button>
    </Card>
  );
}
export default ExpenseItem;
