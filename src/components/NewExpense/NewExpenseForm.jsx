import React, { useState } from 'react'
import '../../index.css'
import FormLabel from './FormLabel'

const NewExpenseForm = props => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = e => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = e => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = e => {
    setDate(e.target.value)
  }

  const formSubmitHandler = e => {
    e.preventDefault()
    const reqData = {
      title: title,
      amount: parseFloat(amount),
      date: new Date(date)
    }    
    props.onSaveExpenseData(reqData)
    props.onCancelBtn()
  }

  const cancelBtnHandler = () => {
    props.onCancelBtn()
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='flex flex-wrap'>
        <FormLabel>
          <label htmlFor='title'>Title</label>
          <input
            name='title'
            type='text'
            value={title}
            onChange={titleChangeHandler}
          />
        </FormLabel>
        <FormLabel>
          <label htmlFor='amount'>Amount</label>
          <input
            name='amount'
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </FormLabel>
        <FormLabel>
          <label htmlFor='date'>Date</label>
          <input
            name='date'
            type='date'
            min='2019-1-1'
            max='2022-31-12'
            value={date}
            onChange={dateChangeHandler}
          />
        </FormLabel>
        <div className='lg:w-[50%] w-full flex lg:items-end lg:justify-end items-center justify-center'>
          <button
            type='button'
            className='bg-[#380054] text-white text-xl md:text-2xl px-5 py-4 rounded-md mx-5'
            onClick={cancelBtnHandler}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='bg-[#380054] text-white text-xl md:text-2xl px-5 py-4 rounded-md mx-5'
          >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewExpenseForm
