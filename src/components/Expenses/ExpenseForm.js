import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const [isTitleValid, setTitleValidtiy] = useState(true);
  const [isAmountValid, setAmountValidtiy] = useState(true);
  const [isDateValid, setDateValidtiy] = useState(true);

  const titleChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: value };
    });
    if (userInput.enteredTitle.trim().length > 0) {
      setTitleValidtiy(true);
    }
  };
  const amountChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: value };
    });
    if (userInput.enteredAmount.trim().length > 0) {
      setAmountValidtiy(true);
    }
  };
  const dateChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: value };
    });

    if (userInput.enteredDate.trim().length > 0) {
      setDateValidtiy(true);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    debugger;
    if (
      userInput.enteredTitle.trim().length == 0 ||
      userInput.enteredAmount.trim().length == 0 ||
      userInput.enteredDate.trim().length == 0
    ) {
      if (userInput.enteredTitle.trim().length == 0) {
        setTitleValidtiy(false);
      }
      if (userInput.enteredAmount.trim().length == 0) {
        setAmountValidtiy(false);
      }
      if (userInput.enteredDate.trim().length == 0) {
        setDateValidtiy(false);
      }
      return;
    }

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
        <label style={{ color: !isTitleValid ? "red" : "" }}>Title</label>
        <input
          type="text"
          style={{
            borderColor: !isTitleValid ? "red" : "",
            backgroundColor: !isTitleValid ? "salmon" : "",
          }}
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="expense-form-control  2-column">
        <label style={{ color: !isAmountValid ? "red" : "" }}>Amount</label>
        <input
          style={{
            borderColor: !isAmountValid ? "red" : "",
            backgroundColor: !isAmountValid ? "salmon" : "",
          }}
          type="number"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="expense-form-control  2-column">
        <label style={{ color: !isDateValid ? "red" : "" }}>Date</label>
        <input
          style={{
            borderColor: !isDateValid ? "red" : "",
            backgroundColor: !isDateValid ? "salmon" : "",
          }}
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
