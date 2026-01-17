import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2023, 0, 10),
      title: "New book",
      price: "30.99"
    },
    {
      id: 2,
      date: new Date(2023, 0, 10),
      title: "New jeans",
      price: "99.99"
    }
  ];
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }
  return (
    <div className='App'>
      <NewExpense onAddExpence={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;