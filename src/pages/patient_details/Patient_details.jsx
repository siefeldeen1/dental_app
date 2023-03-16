import React, { useState } from 'react';
import Input from '../../compounts/inputs/Input'
import './patient.css'
import DatePicker from 'react-date-picker';
import { AiOutlineCalendar  } from 'react-icons/ai';
import { HiOutlineXMark } from 'react-icons/hi2';
import Sidebar from '../sidebar/side_bar.jsx'

function Patient_details() {
  const [value, onChange] = useState(new Date());

  const [Name, setName] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [address, setaddress] = useState('')
  const [country, setcountry] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')
  const [zip_code, setzip_code] = useState('')
  const [birth, setbirth] = useState('')
  const [emergency, setemergency] = useState('')
  const [preference, setpreference] = useState('')
  const [gender, setgender] = useState('')
  const [guardian, setguardian] = useState('')
  const [patient_id, setpatient_id] = useState('')
  const [notes, setnotes] = useState('')

  const [invaild_email, setinvaild_email] = useState(false)
  const [missing_name, setmissing_name] = useState(false)
  const [missing_phone, setmissing_phone] = useState(false)
  const [missing_date, setmissing_date] = useState(false)


const submit = ()=>{
  console.log(Name,email,phone,address,birth,
    emergency,preference,gender,guardian,patient_id,notes);

   if (Name.length < 1){
    setmissing_name(true)
  }else if (phone.length < 1){
    setmissing_phone(true)
  }else if (birth.length < 1){
    setmissing_date(true)
  } else if ((email.includes('@')== false)||(email.includes('.')== false)) {
    setinvaild_email(true)
  }
  else{
    setinvaild_email(false)
  fetch("http://localhost:8082/patient_details",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
      Name :Name,
      email:email,
      phone:phone,
      country:country,
      state:state,
      city:city,
      zip_code:zip_code,
      birth:birth,
      emergency:emergency,
      preference:preference,
      gender:gender,
      guardian:guardian,
      patient_id:patient_id,
      notes:notes,

      
  })

}).then((res)=>{
    console.log('llll',res.status);
    if(res.status == 200 ){
     alert("works")
    }else {
      seterr(true)
    }
    })
  }

}

  return (
    <div className='background_patient' style={{overflow:"hidden"}}>
      <Sidebar/>
      <div className='body_itself'>
          <div className='patient_details_grid'>


            <div>
            <Input value={Name} onChange={(e)=>{setName(e.target.value)}} label={"Name"} placeholder={"Enter your name"}/>
              {missing_name&&
              <div style={{color:"#FF9494 "}}>This is a required field</div>
              }
            </div>
           
           <div>
             <Input value={email} onChange={(e)=>{setemail(e.target.value)}} label={"Email"} placeholder={"Enter your email"}/>
            {invaild_email&&
                <div style={{color:"#FF9494 "}}> please enter a vaild email </div>
            }
           </div>
          
            <div>
            <Input value={phone} onChange={(e)=>{setphone(e.target.value)}} label={"Phone Number"} placeholder={"Enter your Phone Number"}/>
            {missing_phone&&
              <div style={{color:"#FF9494 "}}>This is a required field</div>
              }
            </div>
           
            <Input value={country} onChange={(e)=>{setcountry(e.target.value)}} label={"Country"} placeholder={"Enter your Country"}/>
            <Input value={state} onChange={(e)=>{setstate(e.target.value)}} label={"State"} placeholder={"Enter your State"}/>
            <Input value={city} onChange={(e)=>{setcity(e.target.value)}} label={"City"} placeholder={"Enter your City"}/>
            <Input value={zip_code} onChange={(e)=>{setzip_code(e.target.value)}} label={"Zip Code"} placeholder={"Enter your Zip Code"}/>

            <div className='comp_dev'>
              <label htmlFor="">Date of Birth</label>
              <input value={birth} onChange={(e)=>{setbirth(e.target.value)}} className='input_comp' type="date" placeholder='Enter your Date of Birth'/>
              {missing_date&&
              <div style={{color:"#FF9494 "}}>This is a required field</div>
              }
            </div>
            
            <Input value={emergency} onChange={(e)=>{setemergency(e.target.value)}}  label={"Emergency Contact "} placeholder={"Enter your Emergency Contact "}/>

            {/* <div className='comp_dev'>
              <label htmlFor="">Date of Birth</label>
               <DatePicker className='input_comp' onChange={onChange} value={value} calendarIcon={<AiOutlineCalendar  size={21} color={"white"} />} clearIcon={<HiOutlineXMark size={21} color={"white"}/>}/>
           
            </div> */}
            <div className='comp_dev'>
              <label for="">Upload files</label> 
              <input className='input_comp' style={{height:"fit-content"}} type="file" placeholder='upload your files'/> 
            </div>
               
               
            <Input value={preference} onChange={(e)=>{setpreference(e.target.value)}} label={"Preferences"} placeholder={"Enter your Preferences  "}/>


            <Input  value={gender} onChange={(e)=>{setgender(e.target.value)}} label={"Gender"} placeholder={"Enter your Gender"}/>

            {/* <div  className='comp_dev'>
                <label htmlFor="">Gender </label>
                <select className='input_comp'  id="">
                  <option value="" selected hidden disabled>Enter your Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
            </div> */}
      

        
            <Input value={guardian} onChange={(e)=>{setguardian(e.target.value)}}  label={"Guardian/Parent Name "} placeholder={"Enter the Guardian/Parent Name "}/>
            <Input  value={patient_id} onChange={(e)=>{setpatient_id(e.target.value)}} label={"Patient Id"} placeholder={"Enter your Patient Id"}/>

            <Input value={notes} onChange={(e)=>{setnotes(e.target.value)}}  label={"Treatment Plan and Notes "} placeholder={"Enter your Treatment Plan and Notes "}/>
        
          </div>
          <button className='adding_patient_details' onClick={()=>{submit()}}>Add</button>
      </div>
  
    </div>
  
  )
}

export default Patient_details