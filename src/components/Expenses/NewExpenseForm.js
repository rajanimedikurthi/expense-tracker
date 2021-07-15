import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenseForm.css";
import { useState } from "react";
const NewExpenseForm = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };
  const [filteredyear, setYear] = useState("2021");
  const filterChangeHandler = (year) => {
    setYear(year);
    console.log(year);
  };
  return (
    <div className="expense-form flex-container column box">
      <ExpenseFilter
        selected={filteredyear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpenseForm;
