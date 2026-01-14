import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
    const [userInput, setuserInput] = useState({
        enteredtitle:'',
        enteredPrice:'',
        enteredPrice:''
    })

    console.log(enteredTitle)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Price</label>
                    <input type="number" min='0.01' step='0.01' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type="date" min='2025-11-12' max='2026-01-31' onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm