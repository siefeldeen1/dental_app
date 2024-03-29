import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import './Appoitment.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Select from 'react-select';

function Appointment_popup({start,end,value_s,value_e,value_name,style,onclick,name_change,value_descr,open_pop}) {
    const [app_name, setapp_name] = useState('')
    const [start_date, setstart_date] = useState('')
    const [end_date, setend_date] = useState('')
    const [descr, setdescr] = useState('')
    const [input_vals, setinput_vals] = useState()


    let options = []

useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/render_patients`,{
        method:"get",
        headers:{
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name: localStorage.getItem("clinic_name")
        }
      }).then((res)=>res.json())
      .then((data)=>{
        // console.log("render_pat",data);
        setinput_vals(data)
      
      })
}, [])


setTimeout(() => {
    input_vals.forEach(e => {
       
        options.push(  { value: `${e.name}`, label: `${e.name} ${e.last_name},   ${e.phone}, ${e.birth_date}` })

            const optionz=  [
                { value: `${e.name}`, label: `${e.name} ${e.last_name},   ${e.phone}, ${e.birth_date}` },

              ]
              console.log("datgez",e);
       });
}, 50);


const submitter = ()=>{


    console.log("start_date",start_date);
    console.log("end_date",end_date);

//     console.log(app_name,start_date,end_date,descr);
//    console.log( start_date.split("T")[0].split("-"));
    const start_year= start_date.split("T")[0].split("-")[0]
    const start_month= start_date.split("T")[0].split("-")[1]
    const start_day= start_date.split("T")[0].split("-")[2]
    const start_hour =  start_date.split("T")[1].split(":")[0]
    const start_min=  start_date.split("T")[1].split(":")[1]

    const end_year= end_date.split("T")[0].split("-")[0]
    const end_month= end_date.split("T")[0].split("-")[1]
    const end_day= end_date.split("T")[0].split("-")[2]
    const end_hour =  end_date.split("T")[1].split(":")[0]
    const end_min=  end_date.split("T")[1].split(":")[1]

    console.log(`${start_year},${start_month},${start_day},${start_hour},${start_min}`);
    console.log(`${end_year},${end_month},${end_day},${end_hour},${end_min}`);
// console.log("itemsksa",app_name.value);

    fetch(`${import.meta.env.VITE_BACKEND_API}/appointment_date`,{
        method: "POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            title:app_name.value,
            start:start_date,
            end:end_date,
            descr:descr,
            clinic_id:localStorage.getItem("clinic_id"),
            clinic_name:localStorage.getItem("clinic_name")
        })
        
    }).then((res)=>res.json())
    .then((data)=>
         location.reload())

    

}




  return (
    <div className='pop_up_background' style={style}>
        <div className='appoint_body'>
                <h3 className="header_appointment_pop">Please select the date of the appointment </h3>

                <div className='date_dev'>
                            <label htmlFor="">Appointment/patient name </label>
                          
                            <Select
                                        options={(options)}
                                        // getOptionLabel={(options) => {
                                        //   return options["name"];
                                        // }}
                                        // getOptionValue={(options) => {
                                        //   return options["name"];
                                        // }}
                                        value={app_name}
                                        onChange={(item) => {
                                          setapp_name(item);
                                          console.log("itemsksa",item.value);
                                        }}
                                        styles={{control: (base, state) => ({
                                          ...base,
                                          background: "#3A3C3E", borderRadius:  "5px" ,
                                          color:"white",
                                          borderColor: null,
                                          boxShadow: null,
                                          borderWidth: 0 ,
                                          "&:hover": {
                                            borderColor: null }}),
                                            menu: base => ({
                                              ...base,
                                              background: "#3A3C3E",
                                              color:"white"
                                            }),
                                            
                                          }}
                                        //   classNamePrefix="react_select_color"
                                        theme={(theme) => ({
                                          ...theme,
                                          borderRadius: 0,
                                        
                                          colors: {
                                          ...theme.colors,
                                            text: 'white',
                                            primary25: 'hotpink',
                                            primary: 'black',
                                          },
                                        })}
                                      />
                            {/* <input className='input_date_time' style={{padding:"7px"}} placeholder='Please enter the appointment name' value={app_name} onChange={(e)=>{setapp_name(e.target.value)}} type="text" /> */}
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
                
                <Button onclick={()=>{submitter();onclick()}} text={"Confirm"}/>

                <div className='close_btn' onClick={()=>{onclick()}}>
                    <AiOutlineCloseCircle size={21} color="white"/>
                </div>
                
        </div>
    </div>
  )
}

export default Appointment_popup