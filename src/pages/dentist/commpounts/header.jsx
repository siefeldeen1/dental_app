import React from 'react'
import '../dentist.css'
import { FaPen } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';
function header() {
  return (
    <header style={{width:"100%"}}>
    <div className='header_div'>
            <div className='title_info'>
            <div>Patient ID:</div>
            <div>-</div>
            </div>
            <div className='title_info'>
            <div>Patient name:</div>
            <div>-</div>
            </div>
            <div className='title_info'>
            <div>Date of birth:</div>
            <div>-</div>
            </div>
            <div className='title_info'>
            <div>Date of radiograph creation:</div>
            <div>-</div>
            </div>
            <div className='title_info'>
            <div>X-ray image filename</div>
            <div>-</div>
            </div>

            <div>
            <button className='edit_btn_header'> <FaPen/>Edit</button>
            </div>
    </div>
    </header>
  )
}

export default header