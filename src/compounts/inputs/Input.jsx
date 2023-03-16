import React from 'react'
import './input.css'

function Input({placeholder,label,value,onChange}) {
  return (
    <div className='comp_dev'>
        <label htmlFor="">{label}</label>
        <input value={value} className='input_comp' onChange={onChange} placeholder={placeholder} type="text" />
    </div>
  )
}

export default Input