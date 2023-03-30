import React, { useEffect } from 'react'
import '../dentist.css'
import { FaPen } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';
function header(props) {

useEffect(() => {
  
 
 
console.log( "number",document.getElementById("numbering_type").value);
document.getElementById("numbering_type").value = localStorage.getItem("counting")
 
}, [])

const onChange =()=>{
 const value = document.getElementById("numbering_type").value
  localStorage.setItem("counting",value)
}

  return (
    <header style={{width:"100%"}}>
      <div className='header_div'>
        <div className='header_Info'>
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

     
          

              <div>
            <select onChange={()=>{onChange();props.numb()}} id="numbering_type">
                <option value="FDI">FDI</option>
                <option value="Palmer">Palmer</option>
                <option value="Universal">Universal</option>
          </select>
        </div>
      </div>
    
    </header>
  )
}

export default header