import React from 'react'
import './Textarea.css'

function Textarea({placeholder,label,value,onChange,style}) {
  return (
    <div className='textarea_dev_con'>
        <label htmlFor="" >{label}</label>
        <textarea className='textarea_componat' rows="" cols="" value={value} placeholder={placeholder} onChange={onChange} style={style} ></textarea>
    </div>
  )
}

export default Textarea