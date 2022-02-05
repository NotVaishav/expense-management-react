import Card from '../UI/Card'
import Chart from './Chart'

const ExpenseChart = props => {
  const dataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },    
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ]  
  for (let each of props.elementData) {
    const monthVal = each.date.getMonth()
    dataPoints[monthVal].value += each.amount
  }

  return (
    <Card className='bg-[#F8DAFF] mx-3'>
      <Chart dataPoints={dataPoints} />
    </Card>
  )
}

export default ExpenseChart
