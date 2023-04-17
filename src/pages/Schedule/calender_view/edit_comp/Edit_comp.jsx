import React from 'react'
import { useState } from 'react';
import Button from '../../../../compounts/button/Button';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Edit_comp.css'
import { useEffect } from 'react';


function Edit_comp({style,onclick,data,onclick2}) {
    const [start_date, setstart_date] = useState()
    const [end_date, setend_date] = useState()
    const [app_name, setapp_name] = useState()
    const [descr, setdescr] = useState()

    const [aresure, setaresure] = useState(false)

    console.log("appointment_data",data[0].id);

useEffect(() => {
    setstart_date(data[0].start)
    setend_date(data[0].end)
    setapp_name(data[0].title)
    setdescr(data[0].descr)

}, [])



const update = ()=>{
    fetch(`${import.meta.env.VITE_BACKEND_API}/dates_appoint_info`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          start:start_date,
          end:end_date,
          id:data[0].id,
          title:app_name,
          descr:descr,
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name:localStorage.getItem("clinic_name")
        })
      }).then((res)=>res.json())
      .then((data)=>console.log(data))
    
 
}

const delete_patient = ()=>{
    fetch(`${import.meta.env.VITE_BACKEND_API}/dates_appoint`,{
        method:"delete",
        headers:{
          title:data[0].title,
          id:data[0].id,
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name:localStorage.getItem("clinic_name")
        }
      }).then((res)=>res.json())
      .then((data)=>console.log(data))
}

  return (
    <div className='pop_up_background' style={style}>
          {aresure&&
              <div className='pop_up_background'>
                 <div className='appoint_body'  style={{height:"14%"}}>
                    <h5 style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>Are you sure you want to delete this patient?</h5>
                    <div className='lower_part_delete_t'>
                        <Button style={{width:"100%",background:"transparent",border:"grey 1px solid",color:"white"}} onclick={()=>{setaresure(false)}} text={"Cancel"}/>
                        <Button style={{width:"100%",background:"#B33A3A ",color:"white"}} onclick={()=>{onclick();delete_patient()}} text={"Delete"}/>
                    </div>
                 </div>
            </div>
        }
        <div className='appoint_body'>
      
            <h3 className="header_appointment_pop">Appointment Details</h3>
            

                <div className='date_dev'>
                            <label htmlFor="">Appointment/patient name </label>
                            <input className='input_date_time' style={{padding:"7px"}} placeholder='Please enter the appointment name' value={app_name} onChange={(e)=>{setapp_name(e.target.value)}} type="text" />
                </div>

                <div className='inputs_continer'>

                        <div className='date_dev'>
                            <label htmlFor="">Start date</label>
                            <input className='input_date_time' value={start_date} onChange={(e)=>{setstart_date(e.target.value)}} type="datetime-local" />
                        </div>

                        <div className='date_dev'>
                            <label htmlFor="">end date</label>
                            <input className='input_date_time' value={end_date} onChange={(e)=>{setend_date(e.target.value)}} type="datetime-local" />
                        </div>
                </div>
             
                <div className='date_dev'>
                            <label htmlFor="">Appointment description</label>
                            <textarea className='input_date_time' style={{padding:"7px"}} placeholder='Optional - enter the appointment description' value={descr} onChange={(e)=>{setdescr(e.target.value)}} cols="30" rows="7"></textarea>
                            
                </div>

                        <div className='lower_part_update'>
                             
                             <Button style={{width:"100%",background:"#B33A3A ",color:"white"}} onclick={()=>{setaresure(true)}} text={"Delete Patient"}/>
                             <Button style={{width:"100%"}} onclick={()=>{onclick();update()}} text={"Save"}/>                       
                        </div>
                        
                <div className='close_btn' onClick={()=>{onclick2()}}>
                    <AiOutlineCloseCircle size={21} color="white"/>
                </div>
        </div>
    </div>
  )
}

export default Edit_comp