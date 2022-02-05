import Card from '../../UI/Card'

const AddNewExpense = props => {
  const newExpenseHandler = () => {
    props.onBtnClick()
  }

  return (
    <Card className='bg-[#9E86EC] h-[8rem] flex items-center justify-center my-10'>
      <button
        className='bg-[#380054] text-white py-4 px-10 text-2xl rounded-md'
        onClick={newExpenseHandler}
      >
        Add New Expense
      </button>
    </Card>
  )
}

export default AddNewExpense
