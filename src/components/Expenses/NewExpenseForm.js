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
  const [bEditMode, setEditMode] = useState(false);
  const startEditHandler = () => {
    setEditMode(true);
  };
  const stopEditHandler = () => {
    setEditMode(false);
  };
  return (
    <div className="expense-form flex-container column box">
      {!bEditMode && (
        <button onClick={startEditHandler}> Add new expense form </button>
      )}
      {bEditMode && (
        <ExpenseForm
          onStopEdit={stopEditHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpenseForm;
