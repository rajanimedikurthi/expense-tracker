import "./ExpenseItem.css";
import CalendarDisplay from "../CalendarDisplay";

function ExpenseItem(props) {
  const { date, title, amount } = props.item;
  console.log(props);
  return (
    <div className="expense-item">
      <div className="date">
        <CalendarDisplay date={date}></CalendarDisplay>
      </div>
      <div className="text">{title}</div>
      <div className="amount">{amount}</div>
    </div>
  );
}
export default ExpenseItem;
