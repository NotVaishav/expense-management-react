export default function Card (props) {
  const classes = 'shadow-2xl rounded-lg my-6 ' + props.className
  return <div className={classes}>{props.children}</div>
}
