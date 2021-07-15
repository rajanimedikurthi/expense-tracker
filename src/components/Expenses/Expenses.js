import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
function Expenses(props) {
  const { expenses } = props;
  console.log(expenses);
  return (
    <Card className="expense-list box">
      {expenses.map((expenseItem) => {
        console.log(expenseItem);
        return <ExpenseItem key={expenseItem.id} item={expenseItem} />;
      })}
    </Card>
  );
}
export default Expenses;
