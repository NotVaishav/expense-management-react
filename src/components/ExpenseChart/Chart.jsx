import ChartBar from './ChartBar'

const Chart = props => {
  const dataValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const maxValue = Math.max(...dataValues)

  return (
    <div className="flex justify-between w-full">
      {props.dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
          />
        )
      })}
    </div>
  )
}

export default Chart
