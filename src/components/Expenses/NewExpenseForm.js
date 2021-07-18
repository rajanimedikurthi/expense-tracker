import ExpenseForm from "./ExpenseForm";
import "./NewExpenseForm.css";
import NewButton from "../UI/Button/NewButton";
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
        <NewButton onClick={startEditHandler}> Add new expense form </NewButton>
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
