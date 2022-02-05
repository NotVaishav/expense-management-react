export default function ExpenseItemDate (props) {
  const monthVal = props.date.toLocaleString('default', { month: 'long' })
  const yearVal = props.date.toLocaleString('default', { year: 'numeric' })
  const dateVal = props.date.getDate()

  return (
    <div className='flex flex-col items-center mr-3 border-2 border-white rounded-lg py-4 w-40 text-white bg-[#262526]'>
      <div className='text-2xl'>{monthVal}</div>
      <div className='font-thin'>{yearVal}</div>
      <div className='font-bold text-5xl my-2'>{dateVal}</div>
    </div>
  )
}
