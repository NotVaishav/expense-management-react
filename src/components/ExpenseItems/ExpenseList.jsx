import EmptyList from './components/EmptyList'
import ExpenseItem from './ExpenseItem'

const ExpenseList = props => {
  const listOfElems = props.elemList.map(({ title, date, amount, id }) => (
    <ExpenseItem
      key={id}
      title={title}
      date={date}
      amount={amount}
    ></ExpenseItem>
  ))
  let finalList = <EmptyList />
  if (listOfElems.length > 0) {
    finalList = listOfElems
  }
  return <>{finalList}</>
}

export default ExpenseList
