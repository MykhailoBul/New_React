import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <ExpenseItem
        date={new Date(2023, 0, 10)}
        title="New book"
        price="30.99"
      />
      <ExpenseItem
        date={new Date(2023, 0, 10)}
        title="New jeans"
        price="99.99"
      />
    </div>
  );
}

export default App;