import "./ExpenseItem.css";
import CalendarDisplay from "../UI/Calendar/CalendarDisplay";
import Card from "../UI/Card/Card";
function ExpenseItem(props) {
  const { date, title, amount } = props.item;

  return (
    <Card className="expense-item flex-container align-center">
      <div className="date">
        <CalendarDisplay date={date}></CalendarDisplay>
      </div>
      <div className="text">{title}</div>
      <div className="amount">{amount}</div>
    </Card>
  );
}
export default ExpenseItem;
