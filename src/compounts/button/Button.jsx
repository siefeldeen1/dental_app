import React from 'react'
import './Button.css'

function Button({text,onclick,style,}) {
  return (

        <button className='button_type1' style={style} onClick={onclick}>{text}</button>
    
  )
}

export default Button