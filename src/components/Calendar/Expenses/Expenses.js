import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  const { expenses } = props;
  console.log(expenses);
  return (
    <>
      {expenses.map((expenseItem) => {
        console.log(expenseItem);
        return <ExpenseItem item={expenseItem} />;
      })}
    </>
  );
}
export default Expenses;
