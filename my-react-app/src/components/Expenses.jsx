import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses (props){
    console.log(props);
    return (
        <div className="expenses">
        {props.items.map((expense) => (
            <ExpenseItem key = {expense.id}
            date = {expense.date}
            title = {expense.title}
            price = {expense.price}
            />))}
        </div>
    );
}

export default Expenses;