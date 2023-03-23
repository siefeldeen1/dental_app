import React from 'react'
import './input.css'

function Input({placeholder,label,value,onChange,style}) {
  return (
    <div className='comp_dev'>
        <label htmlFor="">{label}</label>
        <input value={value} className='input_comp' style={style} onChange={onChange} placeholder={placeholder} type="text" />
    </div>
  )
}

export default Input