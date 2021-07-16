import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: value };
    });
    console.log("title changed " + value);
  };
  const amountChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: value };
    });
    console.log("title changed " + value);
  };
  const dateChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: value };
    });
    console.log("title changed " + value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    setUserInput({
      enteredAmount: "",
      enteredDate: "",
      enteredTitle: "",
    });
    props.onSaveExpenseData(expenseData);
    props.onStopEdit();
  };
  const cancelHandler = () => {
    props.onStopEdit();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form-control 2-column">
        <label>Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="expense-form-control  2-column">
        <label>Amount</label>
        <input
          type="number"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="expense-form-control  2-column">
        <label>Date</label>
        <input
          type="date"
          value={userInput.enteredDate}
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="expense-form-actions 2-column">
        <button onClick={cancelHandler}>cancel</button>
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
