import ExpenseItemDate from './ExpenseItemDate'
import ExpenseItemTitle from './ExpenseItemTitle'
import ExpenseItemAmount from './ExpenseItemAmount'
import Card from '../UI/Card'

export default function ExpenseItem (props) {
  return (
    <Card className='flex px-4 py-5 bg-[#434243] text-xl font-semibold items-center mx-3 '>
      <ExpenseItemDate date={props.date}></ExpenseItemDate>
      <div className="lg:grow flex flex-col-reverse ml-auto lg:flex-row lg:ml-0 lg:items-center">
        <ExpenseItemTitle className="text-right" title={props.title}></ExpenseItemTitle>
        <ExpenseItemAmount className="mb-12 lg:mb-0" amount={props.amount}></ExpenseItemAmount>
      </div>
    </Card>
  )
}
