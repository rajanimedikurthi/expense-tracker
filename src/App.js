import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Calendar/Expenses/Expenses";

const expenses = [
  {
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: "16000",
  },
  {
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: "16000",
  },
  {
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: "16000",
  },
  {
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: "16000",
  },
];
function App() {
  return (
    <div>
      <h2>Lets get started</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
