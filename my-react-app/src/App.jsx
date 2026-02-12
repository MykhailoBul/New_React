import {useState, useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Error from './components/UI/Error';
import './App.css'

const App = () => {
  const[isFetching, setIsFetching] = useState(false); 
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/expenses');
        if (!response.ok) {
          throw new Error('Failed to fetch expenses');
        }
        const data = await response.json();
        setExpenses(data.expenses);
      } catch (error) {
        setError(error.message);
        setShowError(true);
      }
      setIsFetching(false);
    };
    getExpenses();
      console.log('Expenses data in App component after useEffect fetch:', expenses);
  }, []);

  const errorHandler = () => {
    setError(null);
    setShowError(false);
  }

  const addExpenseHandler = (expense) => {
    const AddExpence = async () => {
      try {
        const response = await fetch('http://localhost:3000/add-expenses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({expenses: expense}),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to add expense');
        }
        setExpenses((previousExpenses) => {
          return [expense, ...previousExpenses];
        });
      } catch (error) {
        setError(error.message);
        setShowError(true);
      }
    };
    AddExpence(expense);
  }
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {showError && <Error error={error} onConfirm={errorHandler}/>}
      <Expenses expenses={expenses} isLoading={isFetching}/>
    </div>
  );
}

export default App;