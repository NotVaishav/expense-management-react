export default function ExpenseItemTitle (props) {
  const classes = "text-white text-3xl ml-5 " + props.className
  return <div className={classes}>{props.title}</div>
}
