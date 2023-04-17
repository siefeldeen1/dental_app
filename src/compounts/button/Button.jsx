import React from 'react'
import './Button.css'

function Button({text,onclick,style,onClickCapture}) {
  return (

        <button className='button_type1' style={style} onClickCapture={onClickCapture} onClick={onclick}>{text}</button>
    
  )
}

export default Button