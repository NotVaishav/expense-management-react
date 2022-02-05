const ExpenseItemAmount = props => {
  const classes =
    'ml-auto border-white rounded-md border-2 py-2 px-5 bg-[#380054] text-white ' +
    props.className
  return <div className={classes}>${props.amount}</div>
}

export default ExpenseItemAmount