import '../../index.css'

const ExpenseFilter = props => {
  const yearChangeHandler = e => {
    props.onYearUpdate(e.target.value)
  }
  return (
    <div className='flex mx-5 mt-5 text-2xl font-bold'>
      <div className='text-white'>Filter by year</div>
      <div className='ml-auto'>
        <select
          className='px-12 py-1'
          name='years'
          id='years'
          onChange={yearChangeHandler}
          defaultValue='all'
        >
          <option value='all'>All</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
