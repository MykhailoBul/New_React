import Expenses from '../Expenses';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../Card';

const Expenses = (props) => {
    const filterYearHandler = (filteredYear) => {
        console.log('Year data in Expenses is:', filteredYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterYearHandler}/>
            {props.expenses.map((expense) => {
                return (
                    <ExpenseItem expenseData={expense} key={expense.id} />
                );
            })}
        </Card>
    );
};

export default Expenses;
