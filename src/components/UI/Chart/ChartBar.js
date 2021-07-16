import "./ChartBar.css";
const ChartBar = (props) => {
  const { label, value, max } = props;
  let barFillHeight = "0%";
  if (max > 0) {
    barFillHeight = Math.round((value / max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar-label">{label}</div>
    </div>
  );
};
export default ChartBar;
