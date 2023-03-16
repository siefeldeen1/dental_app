import React, { useState } from 'react'
import Aggregated from './Aggregated_View/Aggregated'
import './Schedule.css'
import Sidebar from '../sidebar/side_bar'
import Calender_view from './calender_view/Calender_view'
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoPeopleOutline } from "react-icons/io5";
import Patient_view from './patient_view/Patient_view'


function Schedule() {
  const [taps_on, settaps_on] = useState(true)

  const toggle_on = (e)=>{
    document.querySelectorAll(".tab_schedule").forEach(ele => {
      ele.classList.remove('active_tab_schedule')
    });
    e.currentTarget.classList.add('active_tab_schedule')
  }


  return (
    <div style={{display:"flex"}}>
        <Sidebar/>
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"15px"}}>
             <Aggregated/>
             <div className='tabs_cont_Dev'>
                <div className='tab_schedule active_tab_schedule' onClick={(e)=>{toggle_on(e);settaps_on(true)}} ><AiOutlineCalendar size={20}/> Calender view</div>
                <div className='tab_schedule' onClick={(e)=>{toggle_on(e);settaps_on(false)}} ><IoPeopleOutline size={20}/><span>Patient View</span></div>
             </div>
             {taps_on?
                <Calender_view/>:
                <Patient_view/>
             }
             
        </div>
    </div>
  )
}

export default Schedule