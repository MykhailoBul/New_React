import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={(event) => {
                console.log('Year selected in ExpensesFilter:', event.target.value);
                props.onChangeFilter(event.target.value);
                }}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;