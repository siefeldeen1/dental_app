import React from 'react'
import './input.css'

function Input({placeholder,label,value,onChange,style,type}) {
  return (
    <div className='comp_dev'>
        <label htmlFor="">{label}</label>
        <input value={value} className='input_comp' style={style} onChange={onChange} placeholder={placeholder} type={type} />
    </div>
  )
}

export default Input