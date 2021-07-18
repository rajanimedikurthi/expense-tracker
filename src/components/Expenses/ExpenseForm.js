import { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import FormControl from "../UI/FormControl";

const ExpenseForm = (props) => {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const [isTitleValid, setTitleValidtiy] = useState(true);
  const [isAmountValid, setAmountValidtiy] = useState(true);
  const [isDateValid, setDateValidtiy] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const titleValue = titleRef.current.value;
    const amountValue = amountRef.current.value;
    const dateValue = dateRef.current.value;

    if (
      titleValue.trim().length === 0 ||
      amountValue.trim().length === 0 ||
      dateValue.trim().length === 0
    ) {
      if (titleValue.trim().length === 0) {
        setTitleValidtiy(false);
      }
      if (amountValue.trim().length === 0) {
        setAmountValidtiy(false);
      }
      if (dateValue.trim().length === 0) {
        setDateValidtiy(false);
      }
      return;
    }
    const expenseData = {
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };
    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";

    props.onSaveExpenseData(expenseData);
    props.onStopEdit();
    setTitleValidtiy(false);
    setTitleValidtiy(false);
    setTitleValidtiy(false);
  };
  const cancelHandler = () => {
    props.onStopEdit();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isTitleValid}>
        <label>Title</label>
        <input type="text" ref={titleRef} />
      </FormControl>

      <FormControl invalid={!isAmountValid}>
        <label>Amount</label>
        <input type="number" ref={amountRef} />
      </FormControl>
      <FormControl invalid={!isDateValid}>
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" ref={dateRef} />
      </FormControl>
      <div className="form-actions 2-column">
        <Button onClick={cancelHandler}>cancel</Button>
        <Button type="submit">Add expenses</Button>
      </div>
    </form>
  );
};
export default ExpenseForm;
