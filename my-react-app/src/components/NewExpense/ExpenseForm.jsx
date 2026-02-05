import './ExpenseForm.css'
import { useState } from 'react'


const ExpenseForm = (props) => {
    const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    })

    console.log(userInput)

    const titleChangeHandler = (event) => {
        setuserInput({
            ...userInput, enteredTitle: event.target.value
        })
    }
    const priceChangeHandler = (event) => {
        setuserInput({
            ...userInput, enteredPrice: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setuserInput({
            ...userInput, enteredDate: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            price: userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setuserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        })
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} 
                    value={userInput.enteredTitle}/>
                </div>
                <div className='new-expense_control'>
                    <label>Price</label>
                    <input type="number" min='0.01' step='0.01' onChange={priceChangeHandler} 
                    value={userInput.enteredPrice}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type="date" min='2025-11-12' max='2026-01-31' onChange={dateChangeHandler}
                    value={userInput.enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button
                    type="button"
                    onClick={props.onCancel}>Cancel
                </button>
                
                <button type="submit">
                    Add Expense
                </button>
            </div>

        </form>
    )
}

export default ExpenseForm