import React from 'react'

const FormLabel = props => {
  return (
    <div className='flex flex-col w-[48%] my-2 mx-2 form-box'>
      {props.children}
    </div>
  )
}

export default FormLabel
