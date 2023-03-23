import React, { useEffect, useState,useContext } from 'react'
import './home_patient.css'
import Button from '../../../compounts/button/Button'
import Search from '../../../compounts/search/Search'
import {MainContext} from '../../../../utils/MainContext'
import Side_bar from '../../sidebar/side_bar'
import Input from '../../../compounts/inputs/Input'
import Textarea from '../../../compounts/textarea/Textarea'
import { useNavigate } from 'react-router-dom'

function Home_patient_detials() {
  const navigate = useNavigate();

  const [search_val, setsearch_val] = useState("")
  const [data_arr, setdata_arr] = useState([])
  const [data_present, setdata_present] = useState(false)

  const [Name, setName] = useState('')
  const [last_nom, setlast_nom] = useState('')
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
  const [missing_last, setmissing_last] = useState(false)


  const{ update_name, setupdate_name} = useContext(MainContext)
  const{ update_last_name, setupdate_last_name} = useContext(MainContext)
  const{ update_phone, setupdate_phone} = useContext(MainContext)
  const{ update_birth, setupdate_birth} = useContext(MainContext)


  console.log(update_name,update_last_name,update_phone,update_birth);

  useEffect(() => {
    // fetch(`http://localhost:8082/Search`,{
    fetch(`http://backend-revica-payment.vercel.app/Search`,{
      method:"get",
      headers:{
        name:update_name,
        last_name:update_last_name,
        phone:update_phone,
        birth:update_birth
      },   
    }).then((res)=>res.json()
    .then((data)=>  { setdata_arr(data),console.log('data_arr',data[0]["city"]);
    setName(data[0]["name"])
    setlast_nom(data[0]["last_name"])
    setemail(data[0]["email"])
    setphone(data[0]["phone"])
    setaddress(data[0]["address"])
    setcountry(data[0]["country"])
    setstate(data[0]["state"])
    setcity(data[0]["city"])
    setzip_code(data[0]["zip_code"])
    setbirth(data[0]["birth_date"])
    setemergency(data[0]["emergency_contact"])
    setpreference(data[0]["preference"])
    setgender(data[0]["gender"])
    setguardian(data[0]["guardian"])
    setpatient_id(data[0]["patient_id"])
    setnotes(data[0]["notes"])
  }  
      )
      )
  
  }, [])
  

  const update_patient = ()=>{
    // fetch("http://localhost:8082/update",{
    fetch("http://backend-revica-payment.vercel.app/update",{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        update_name:update_name,
        update_last_name:update_last_name,
        update_phone:update_phone,
        update_birth:update_birth,
        Name :Name,
        last_name:last_nom,
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
        address:address,   
    })
    }).then((res)=>{if(res.status == 200){
      navigate('/patient_details')
    }})
  }


  return (
    <div className='background_patient' style={{overflow:"hidden"}}>
      <Side_bar/>

        <div className='body_itself'>

        <div className='header_part'>
       
                <div>
                  <Input value={Name} style={{width:"100%"}} onChange={(e)=>{setName(e.target.value);}} label={"First Name"} placeholder={"Enter patient first name"}/>
                    {missing_name&&
                    <div style={{color:"#FF9494 "}}>This is a required field</div>
                    }
                </div>

                <div>
                  <Input value={last_nom} style={{width:"100%"}} onChange={(e)=>{setlast_nom(e.target.value);}} label={"Last Name"} placeholder={"Enter patient last name"}/>
                    {missing_last&&
                    <div style={{color:"#FF9494 "}}>This is a required field</div>
                    }
                </div>

                <div>
                  <Input value={phone} style={{width:"100%"}} onChange={(e)=>{setphone(e.target.value);}} label={"Phone Number"} placeholder={"Enter your Phone Number"}/>
                  {missing_phone&&
                    <div style={{color:"#FF9494 "}}>This is a required field</div>
                   }
              </div>
              
              <div className='comp_dev'>
                  <label htmlFor="">Date of Birth</label>
                  <input value={birth} style={{width:"100%"}} onChange={(e)=>{setbirth(e.target.value);}} className='input_comp' type="date" placeholder='Enter your Date of Birth'/>
                  {missing_date&&
                  <div style={{color:"#FF9494 "}}>This is a required field</div>
                  }
            </div>

        
            {/* <Button  text={"Search"} onclick={()=>{onchange();setsearch_res(true);delete_patient()}} /> */}
        </div>
      
                  <div className='patient_body_part'>
                      <div className='column_part_patient'>

                            <div className='columns_orgs'>
                                  <div className='column_parts'>
                                    <Input  value={gender} onChange={(e)=>{setgender(e.target.value)}} label={"Gender"} placeholder={"Enter your Gender"}/>
                                    <Input  value={patient_id} onChange={(e)=>{setpatient_id(e.target.value)}} label={"Patient Id"} placeholder={"Enter your Patient Id"}/>
                                </div>

                              

                                <div className='column_parts'>
                                    <Input value={guardian} onChange={(e)=>{setguardian(e.target.value)}}  label={"Guardian/Parent Name "} placeholder={"Enter the Guardian/Parent Name "}/>
                                    <Input value={emergency} onChange={(e)=>{setemergency(e.target.value)}}  label={"Emergency Contact "} placeholder={"Enter your Emergency Contact "}/>
                                    <Input value={preference} onChange={(e)=>{setpreference(e.target.value)}} label={"Preferences"} placeholder={"Enter your Preferences  "}/>
                                </div>
                            </div>

                          <div className='column_parts'>

<div>
      <Input value={email} onChange={(e)=>{setemail(e.target.value)}} label={"Email"} placeholder={"Enter your email"}/>
      {invaild_email&&
          <div style={{color:"#FF9494 "}}> please enter a vaild email </div>
      }
</div>

  <Input value={address} onChange={(e)=>{setaddress(e.target.value)}} label={"Street Address "} placeholder={"Enter patient Street Address "}/>
  <Input value={city} onChange={(e)=>{setcity(e.target.value)}} label={"City"} placeholder={"Enter patient City"}/>
  <Input value={state} onChange={(e)=>{setstate(e.target.value)}} label={"State"} placeholder={"Enter patient State"}/>
  <Input value={country} onChange={(e)=>{setcountry(e.target.value)}} label={"Country"} placeholder={"Enter patient Country"}/>
  <Input value={zip_code} onChange={(e)=>{setzip_code(e.target.value)}} label={"Zip Code"} placeholder={"Enter patient Zip Code"}/>

                          </div>


                      </div>

                      <div className='notes_block_part'>

                          <Textarea value={notes} onChange={(e)=>{setnotes(e.target.value)}}  label={"Treatment Plan and Notes "} placeholder={"Enter your Treatment Plan and Notes "}/>
                              
                          <div className='comp_dev'>
                            <label for="">Upload files</label> 
                            <input className='input_comp' style={{height:"fit-content"}} type="file" placeholder='upload your files'/> 
                          </div>
                  
                      </div>
                                
                  </div>
                   
          

        
            <button className='adding_patient_details' onClick={()=>{update_patient()}}>Save</button>
         
      </div>
 
    </div>
  
  )
}

export default Home_patient_detials