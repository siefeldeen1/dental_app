import React, { useEffect, useState,useContext } from 'react'
import Input from '../../compounts/inputs/Input';
import Textarea from '../../compounts/textarea/Textarea';
import './Clinc.css'
import {MainContext} from '../../../utils/MainContext'
import { useNavigate } from "react-router-dom";


function Clinc_info() {
    
  const navigate = useNavigate();
    const [Business_name, setBusiness_name] = useState('')
    const [first_nom, setfirst_nom] = useState('')
    const [last_nom, setlast_nom] = useState('')
    const [email_off, setemail_off] = useState('')
    const [phone_off, setphone_off] = useState('')

    const [email_cl, setemail_cl] = useState('')
    const [address, setaddress] = useState('')
    const [country, setcountry] = useState('')
    const [state, setstate] = useState('')
    const [city, setcity] = useState('')
    const [zip_code, setzip_code] = useState('')

    const [phone, setphone] = useState('')
    const [numbering, setnumbering] = useState('')

    const [facebook, setfacebook] = useState('')
    const [twitter, settwitter] = useState('')
    const [instagram, setinstagram] = useState('')

  
    const [invaild_email, setinvaild_email] = useState(false)
    const [missing_name, setmissing_name] = useState(false)
    const [missing_first, setmissing_first] = useState(false)
    const [missing_phone, setmissing_phone] = useState(false)
    const [missing_last, setmissing_last] = useState(false)

    const{ email, setemail} = useContext(MainContext)
    const{ password, setpassword} = useContext(MainContext)
 
    const submit = ()=>{

        if (Business_name.length < 1){
            setmissing_name(true)
          }else if (phone_off.length < 1){
            setmissing_phone(true)
          }else if (first_nom.length < 1){
            setmissing_first(true)
          } else if(last_nom.length < 1){
            setmissing_last(true)
          }else if ((email_off.includes('@')== false)||(email_off.includes('.')== false)) {
            setinvaild_email(true)
          } 
          else{
            const value = document.getElementById("numbering_type").value
            localStorage.setItem("counting",value)
            setinvaild_email(false)
          // fetch("http://localhost:8082/patient_details",{
          fetch(`${import.meta.env.VITE_BACKEND_API}/clinic_info`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({

              business :Business_name,
              first_name:first_nom,
              last_name:last_nom,
              email_off:email_off,
              phone_off:phone_off,
              email:email_cl,
              phone:phone,
              country:country,
              state:state,
              city:city,
              zip_code:zip_code,
              address:address,
              facebook:facebook,
              twitter:twitter,
              instagram:instagram,
              acc_email:email,
              acc_password:password,
              
          })
        
        }).then((res)=>res.json())
        .then((data)=>{
              console.log("data212",data.clinic_id);
              localStorage.setItem("clinic_name",data.clinic_name)
              localStorage.setItem("clinic_id",data.clinic_id)
            }).then((redirect)=>{
              navigate('/')
             })
          }
        
        }
  
    
            // console.log('llll',res.status);
            // if(res.status == 200 ){
            //  alert("works")
             
            // }else {
            //   seterr(true)
            // }


  return (
    <div className='background_patient' style={{overflow:"hidden"}}>
            <div className='body_itself'>

            <div className='header_part_clinc'>
                    <div>
                    <Input value={Business_name} style={{width:"100%"}} onChange={(e)=>{setBusiness_name(e.target.value);}} label={"Business Name"} placeholder={"Enter your business name"}/>
                        {missing_name&&
                        <div style={{color:"#FF9494 "}}>This is a required field</div>
                        }
                    </div>

                    <div>
                    <Input value={first_nom} style={{width:"100%"}} onChange={(e)=>{setfirst_nom(e.target.value);}} label={"First Name"} placeholder={"Enter your first name"}/>
                        {missing_first&&
                        <div style={{color:"#FF9494 "}}>This is a required field</div>
                        }
                    </div>

                    <div>
                        <Input value={last_nom} style={{width:"100%"}} onChange={(e)=>{setlast_nom(e.target.value);}} label={"Last Name"} placeholder={"Enter your last name"}/>
                        {missing_last&&
                            <div style={{color:"#FF9494 "}}>This is a required field</div>
                        }
                    </div>
                
                <div className='comp_dev'>
                    <Input value={email_off} onChange={(e)=>{setemail_off(e.target.value)}} label={"Office Email"} placeholder={"Enter your office email"}/>
                    {invaild_email&&
                    <div style={{color:"#FF9494 "}}> please enter a vaild email </div>
                    }
                </div>

                <div>
                        <Input value={phone_off} style={{width:"100%"}} onChange={(e)=>{setphone_off(e.target.value);}} label={"Office Phone Number"} placeholder={"Enter your Office Phone Number"}/>
                        {missing_phone&&
                            <div style={{color:"#FF9494 "}}>This is a required field</div>
                        }
                </div>


            </div>
           
                    <div className='patient_body_part'>
                        <div className='column_part_patient'>

                            <div className='column_parts'>

                                <div>
                                <Input value={email_cl} onChange={(e)=>{setemail_cl(e.target.value)}} label={"Email"} placeholder={"Enter your email"}/>
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





                                <div className='columns_orgs'>
                                    <div className='column_parts'>
                                        <Input  value={phone} onChange={(e)=>{setphone(e.target.value)}} label={"Phone Number"} placeholder={"Enter your Phone Number"}/>
                                        
                                        <div className='comp_dev'>
                                            <label for="">Dental numbering</label> 
            
                                            <select className='input_comp'  style={{height:"fit-content"}}  id="numbering_type">
                                                  <option value="FDI">FDI</option>
                                                  <option value="Palmer">Palmer</option>
                                                  <option value="Universal">Universal</option>
                                            </select>
                                        </div>

                                        <div className='comp_dev'>
                                            <label for="">image</label> 
                                            <input className='input_comp' style={{height:"fit-content"}} type="file" placeholder='upload your image'/> 
                                        </div>
                                    </div>

                                

                                    <div className='column_parts'>
                                        <Input value={facebook} onChange={(e)=>{setfacebook(e.target.value)}}  label={"Facebook Page"} placeholder={"Enter your Facebook Page "}/>
                                        <Input value={twitter} onChange={(e)=>{settwitter(e.target.value)}}  label={"Twitter Page"} placeholder={"Enter your Twitter Page "}/>
                                        <Input value={instagram} onChange={(e)=>{setinstagram(e.target.value)}} label={"Instagram Page"} placeholder={"Enter your Instagram Page"}/>
                                    </div>
                                </div>

                           

                        </div>

                        <div className='notes_block_part'>

                            {/* <Textarea value={notes} onChange={(e)=>{setnotes(e.target.value)}}  label={"Treatment Plan and Notes "} placeholder={"Enter your Treatment Plan and Notes "}/> */}
                            <Input label={"Billing Info"} placeholder={"Enter your Billing Info"}/>
                          
                    
                        </div>
                                    
                    </div>

           
                <button className='adding_patient_details' onClick={()=>{submit()}}>Continue</button>
             
                    </div>
    </div>
  )
}

export default Clinc_info