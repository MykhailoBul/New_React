import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    console.log('Expenses component rendered');

    const [filteredYear, setFilteredYear] = useState('2023');


    const filterChangeHandler = (selectedYear) => {
        console.log('Year data in Expenses is:', selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="expenses">
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}/>

        {filteredExpenses.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}/>
        ))}</div>
    );
};

export default Expenses;
