import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const { expenses } = props;
  const [fyear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === fyear;
  });
  let expensesContent = <p>No expenses found </p>;
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map((expenseItem) => {
      return <ExpenseItem key={expenseItem.id} item={expenseItem} />;
    });
  }
  return (
    <Card className="expense-list box">
      <ExpenseFilter selected={fyear} onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
}
export default Expenses;
