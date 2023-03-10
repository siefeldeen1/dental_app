import React from 'react'
import './popup.css'

function popup(props) {
  return (
    <div className='popup_backg'>
        <div className='popup_body'>
                <h2 style={{color:"white"}}>Notice</h2>
                <div style={{color:"#AAABAE"}}>Double click an image to remove it</div>
                <button className='ok_btn' onClick={()=>{props.close_pop()}}>Ok</button>
        </div>
    </div>
  )
}

export default popup