import {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

const DUMMY_EXPENSES = [
    {
      id: 'id1',
      date: new Date(2023, 0, 10),
      title: "New book",
      price: "30.99"
    },
    {
      id: 'id2',
      date: new Date(2023, 0, 10),
      title: "New jeans",
      price: "99.99"
    },
    {
      id: 'id3',
      date: new Date(2023, 0, 10),
      title: "New bag",
      price: "139.99"
    }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  }
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;