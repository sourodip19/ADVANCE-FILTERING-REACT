import React from 'react'

const Buttons = ({onCLickHandler, value, title}) => {
  return (
    <button onClick={onCLickHandler} value={value} className='btns'>{title}</button>
  )
}

export default Buttons
