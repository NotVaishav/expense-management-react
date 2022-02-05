import { useState } from 'react'
import NewExpenseItem from '../NewExpense/NewExpenseItem'
import AddNewExpense from './components/AddNewExpense'

const NewExpenseItemSection = props => {
  const [addState, setAddState] = useState(false)
  const testHandler = newEventData => {
    console.log(newEventData)
    props.onElemAdd(newEventData)
  }

  const btnChangeHandler = () => {
    setAddState(prevState => !prevState)
  }

  const cancelBtnHandler = () => {
    setAddState(prevState => !prevState)
  }
  return (
    <>
      {addState ? (
        <NewExpenseItem
          currLen={props.currLen}
          onElemAdd={testHandler}
          onCancelBtn={cancelBtnHandler}
        />
      ) : (
        <AddNewExpense onBtnClick={btnChangeHandler} />
      )}
    </>
  )
}

export default NewExpenseItemSection
