import { useState } from 'react';
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Card";
import './Expenses.css';
import ExpensesList from "../ExpenseList";

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
