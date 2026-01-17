import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'


const NewExpense = (props) => {
    const saveExpenceDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpence(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenceData={saveExpenceDataHandler}/>
        </div>
    )
}

export default NewExpense