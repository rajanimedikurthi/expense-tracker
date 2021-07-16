const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    const value = event.target.value;
    props.onFilterChange(value);
  };
  return (
    <div className="flex-container justify-flex-end">
      <label className="display-inline">Filter by year </label>
      <select value={props.selected} onChange={filterChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
