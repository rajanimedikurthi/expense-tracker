import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const amounts = props.datapoints.map((datapoint) => datapoint.value);
  console.log(amounts);
  const totalMax = Math.max(...amounts);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            max={totalMax}
            label={datapoint.label}
            value={datapoint.value}
          />
        );
      })}
    </div>
  );
};
export default Chart;
