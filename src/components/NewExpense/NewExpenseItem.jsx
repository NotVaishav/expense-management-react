import Card from '../UI/Card'
import NewExpenseForm from './NewExpenseForm'

const NewExpenseItem = props => {
  const saveExpenseDataHandler = newExpenseData => {
    const expenseData = {
      ...newExpenseData,
      id: props.currLen + 1
    }
    props.onElemAdd(expenseData)
  }

  const cancelBtnHandler = () => {
    props.onCancelBtn()
  }

  return (
    <Card className='bg-[#9E86EC] px-5 py-4'>
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelBtn={cancelBtnHandler}/>
    </Card>
  )
}

export default NewExpenseItem
