import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
function Expenses(props) {
  const { expenses } = props;
  console.log(expenses);
  return (
    <Card>
      {expenses.map((expenseItem) => {
        console.log(expenseItem);
        return <ExpenseItem item={expenseItem} />;
      })}
    </Card>
  );
}
export default Expenses;
