import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found.</p>;
    }

    return(
        <ul className='expenses-list'>
            {
                props.expenses.length > 0 && props.expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} data={expense}/>
                })
            }
        </ul>
    )
}

export default ExpensesList