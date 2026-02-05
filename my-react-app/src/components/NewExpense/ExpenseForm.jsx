import './ExpenseForm.css'
import { useState, useRef } from 'react'


const ExpenseForm = (props) => {
    const titleInputRef = useRef()
    const priceInputRef = useRef()
    const dateInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: titleInputRef.current.value,
            price: priceInputRef.current.value,
            date: new Date(dateInputRef.current.value)
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
                    <input type="text" ref={titleInputRef}/>
                </div>
                <div className='new-expense_control'>
                    <label>Price</label>
                    <input type="number" min='0.01' step='0.01' ref={priceInputRef}  
                    value={userInput.enteredPrice}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type="date" min='2025-11-12' max='2026-01-31' ref={dateInputRef} 
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