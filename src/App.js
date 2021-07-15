import logo from "./logo.svg";
import "./App.css";
import "./Common.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpenseForm from "./components/Expenses/NewExpenseForm";
const expenses = [
  {
    id: "e1",
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: "16000",
  },
  {
    id: "e2",
    date: new Date(2020, 10, 16),
    title: "Rent",
    amount: "48000",
  },
  {
    id: "e3",
    date: new Date(2020, 5, 18),
    title: "Medical bills",
    amount: "12000",
  },
  {
    id: "e4",
    date: new Date(2019, 11, 6),
    title: "Home insurance",
    amount: "12000",
  },
];
const addExpenseDataHandler = (data) => {
  expenses.push(data);
  console.log(data);
  console.log(expenses);
};
function App() {
  return (
    <div>
      <NewExpenseForm onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
