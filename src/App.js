import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/Expenses/ExpenseForm";
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
      <ExpenseForm />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
