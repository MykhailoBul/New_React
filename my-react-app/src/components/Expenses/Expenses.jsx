import { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterYearHandler = (selectedYear) => {
        console.log('Year data in Expenses is:', selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onChangeFilter={filterYearHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
