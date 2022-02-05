const ChartBar = props => {
  let barFillHeight = '0%'

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
  }
  return (
    <div className='flex w-1/6 md:w-1/12 py-3 flex-col items-center font-bold'>
      <div className='h-[12rem] w-6 bg-[#BBABF2] rounded-xl border-2 border-black flex items-end '>
        <div
          className='bg-[#380054] w-full rounded-xl transition-all duration-1000 max-h-full'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div>{props.label} </div>
    </div>
  )
}

export default ChartBar
