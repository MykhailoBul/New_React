import './ExpensesList.css';
import ExpensesItem from './components/ExpenseItem';

const ExpensesList = (props) => {

    return(
        <>
            {
                props.expenses.lenght === 0 && <p>No expenses found.</p>
            }
            {
                props.expenses.lenght > 0 && props.expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} data={expense}/>
                })
            }
        </>
    )
}

export default ExpensesList