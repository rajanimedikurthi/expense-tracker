import "./CalendarDisplay.css";
function CalendarDisplay(props) {
  const { month, year, day } = {
    month: props.date.toLocaleString("en-US", { month: "short" }),
    year: props.date.getFullYear(),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
  };

  return (
    <div className="Calendar-Display">
      <div className="year">{year}</div>
      <div className="month">{month}</div>
      <div className="day">{day}</div>
    </div>
  );
}
export default CalendarDisplay;
