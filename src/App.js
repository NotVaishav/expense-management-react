import { useState } from 'react'
import ExpenseChart from './components/ExpenseChart/ExpenseChart'
import ExpenseFilter from './components/ExpenseFilters/ExpenseFilters'
import ExpenseList from './components/ExpenseItems/ExpenseList'
import NewExpenseItemSection from './components/NewExpense/NewExpenseItemSection'
import Card from './components/UI/Card'
import './index.css'

const elementData = [
  {
    id: 1,
    title: 'Car Insurance',
    date: new Date(2021, 2, 28),
    amount: 297.86
  },
  {
    id: 2,
    title: 'Home Insurance',
    date: new Date(2022, 3, 30),
    amount: 100.56
  },
  {
    id: 3,
    title: 'Groceries',
    date: new Date(2022, 1, 23),
    amount: 100.56
  }
]

function App () {
  const [elemList, setElemList] = useState(elementData)
  const lenOfElems = elementData.length
  const addElemHandler = newEventData => {
    elementData.unshift(newEventData)
    setElemList(() => [...elementData])
  }

  const rootYearChangeHandler = year => {
    if (year === 'all') {
      setElemList(elementData)
    } else {
      const updatedData = elementData.filter(dictObj => {
        return dictObj.date.getFullYear() === parseInt(year)
      })
      setElemList(updatedData)
    }
  }
  return (
    <div className='App'>
      <div className='max-w-screen-xl mx-auto'>
        <NewExpenseItemSection
          currLen={lenOfElems}
          onElemAdd={addElemHandler}
        />
        <Card className='container-div bg-[#1E1D1E] px-4 py-3 max-h-[75vh] overflow-y-scroll'>
          <ExpenseFilter onYearUpdate={rootYearChangeHandler}></ExpenseFilter>
          <ExpenseChart elementData={elemList} />
          <ExpenseList elemList={elemList} />
        </Card>
      </div>
    </div>
  )
}

export default App
