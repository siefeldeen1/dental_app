import React from 'react'
import './fullscreen.css'
import Xray from '../../img/Screenshot (146).png'
import { MdOutlineCancel } from 'react-icons/md';

function fullscreen(props) {
  return (
     <div className='pop_up_background'>
            <div className='pop_up_body'>
                <img className='fullscreen_img' src={Xray} alt="" />

                <div className='cancel_btn' >
                    <MdOutlineCancel size={35} onClick={()=>{props.fullscreen_off()}}/>
                </div>
            </div>


    </div>
  )
}

export default fullscreen