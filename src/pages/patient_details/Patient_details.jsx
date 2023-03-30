import React, { useEffect, useState,useContext } from 'react';
import Input from '../../compounts/inputs/Input'
import './patient.css'
import DatePicker from 'react-date-picker';
import { AiOutlineCalendar  } from 'react-icons/ai';
import { HiOutlineXMark } from 'react-icons/hi2';
import Sidebar from '../sidebar/side_bar.jsx'
import Textarea from '../../compounts/textarea/Textarea';
import Button from '../../compounts/button/Button';
import {MainContext} from '../../../utils/MainContext'
import { useNavigate } from "react-router-dom";




function Patient_details() {

  const navigate = useNavigate();

  const [value, onChange] = useState(new Date());

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

  const [data_arr, setdata_arr] = useState([])
  const [search_res, setsearch_res] = useState(false)

  const{ update_name, setupdate_name} = useContext(MainContext)
  const{ update_last_name, setupdate_last_name} = useContext(MainContext)
  const{ update_phone, setupdate_phone} = useContext(MainContext)
  const{ update_birth, setupdate_birth} = useContext(MainContext)

  let arr = []

const submit = ()=>{
  console.log(Name,email,phone,address,birth,
    emergency,preference,gender,guardian,patient_id,notes);

   if (Name.length < 1){
    setmissing_name(true)
  }else if (phone.length < 1){
    setmissing_phone(true)
  }else if (birth.length < 1){
    setmissing_date(true)
  } else if(last_nom.length < 1){
    setmissing_last(true)
  }
  // else if ((email.length != 0)&&(email.includes('@')== false)||(email.includes('.')== false)) {
  //   setinvaild_email(true)
  // } 
  else{
    setinvaild_email(false)

    for (let i = 0; i < document.querySelector("#input_files").files.length; i++) {
      const selectedFile = document.querySelector("#input_files").files[i];
  
      const formData = new FormData()
      formData.append("photo",selectedFile)
  
      console.log('selectedimgs',selectedFile.length);
  
      fetch(`${import.meta.env.VITE_BACKEND_API}/uploadImg`,{
          method:"POST",
          body: formData
      }).then((res) => res.json())
      .then((data)=>{
          console.log(data.path);
  
          arr.push(data.path)
         
      })
    }
    setTimeout(() => {
      console.log("arr12312",arr);
      fetch(`${import.meta.env.VITE_BACKEND_API}/patient_details`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
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
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name: localStorage.getItem("clinic_name"),
          imgs:arr
      })
    
    }).then((res)=>{
        console.log('llll',res.status);
        if(res.status == 200 ){
         alert("works")
         location.reload();
        }else {
          seterr(true)
        }
        })
    }, 1500);
 


    


  }

}



// const upload_Img=()=>{
 
//   setTimeout(() => {
//     console.log("arro231",arr.length);
//     console.log("arro231",arr)
//   }, 1000);
 
// }




const onchange= ()=>{
  // fetch(`http://localhost:8082/Search`,{
  fetch(`${import.meta.env.VITE_BACKEND_API}/Search`,{
    method:"get",
    headers:{
      name:Name,
      last_name:last_nom,
      phone:phone,
      birth:birth
    },   
  }).then((res)=>res.json()
  .then((data)=>  { setdata_arr(data),console.log();}  
  
      
  )
  )
}

useEffect(() => {
 
}, [])

const delete_patient = ()=>{
  setTimeout(() => {
    document.querySelectorAll(".action_row").forEach(e => {
     
      const name_value = e.children[8].children[0].innerHTML
      const last_name_value = e.children[9].children[0].innerHTML
      const phone_value = e.children[12].children[0].innerHTML
      const birth_value = e.children[1].children[0].innerHTML
  
        const delete_btn = e.children[16].children[0].children[1]
        const Update_btn = e.children[16].children[0].children[0]

        delete_btn.addEventListener("click",()=>{
          console.log("action",name_value,last_name_value,phone_value,birth_value);
          // fetch("http://localhost:8082/delete",{
          fetch(`${import.meta.env.VITE_BACKEND_API}/delete`,{
            method:"get",
            headers:{
              name:name_value,
              last_name:last_name_value,
              phone:phone_value,
              birth:birth_value
            },   
          }).then((res)=> res.json())
          onchange()
        })
        
        Update_btn.addEventListener("click",()=>{
          setupdate_name(name_value)
          setupdate_last_name(last_name_value)
          setupdate_phone(phone_value)
          setupdate_birth(birth_value)
          setTimeout(() => {
            navigate("/edit_patient_details")
          }, 500);
        })
     
    });
  }, 1000);

}





  return (
    <div className='background_patient' style={{overflow:"hidden"}}>
      <Sidebar/>
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
                  <Input type={"number"} value={phone} style={{width:"100%"}} onChange={(e)=>{setphone(e.target.value);}} label={"Phone Number"} placeholder={"Enter your Phone Number"}/>
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

        
            <Button  text={"Search"} onclick={()=>{onchange();setsearch_res(true);delete_patient()}} />
        </div>
          {!search_res?
                  <div className='patient_body_part'>
                      <div className='column_part_patient'>

                            <div className='columns_orgs'>
                                  <div className='column_parts'>
                                    <Input  value={gender} onChange={(e)=>{setgender(e.target.value)}} label={"Gender"} placeholder={"Enter your Gender"}/>
                                    <Input type={"number"}  value={patient_id} onChange={(e)=>{setpatient_id(e.target.value)}} label={"Patient Id"} placeholder={"Enter your Patient Id"}/>
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
                            <input className='input_comp' id='input_files' style={{height:"fit-content"}} type="file" accept="image/*" multiple placeholder='upload your files'/> 
                          </div>
                  
                      </div>
                                
                  </div>:
                      <div className='table_Container_Patient' >
                <table className='table_patient'>
                <tr>
                          <th><abbr title="Address">Address</abbr></th>
                          <th><abbr title="Birth date">Birth date</abbr></th>
                          <th><abbr title="City">City</abbr></th>
                          <th><abbr title="Country">Country</abbr></th>
                          <th><abbr title="Email">Email</abbr></th>
                          <th><abbr title="Emergency contact">Emergency contact</abbr></th>
                          <th><abbr title="Gender">Gender</abbr></th>
                          <th><abbr title="Guardian">Guardian</abbr></th>
                          <th><abbr title="Name">Name</abbr></th>
                          <th><abbr title="last name">last name</abbr></th>
                          <th><abbr title="Notes">Notes</abbr></th>
                          <th><abbr title="Patient id">Patient id</abbr></th>
                          <th><abbr title="Phone">Phone</abbr></th>
                          <th><abbr title="Preference">Preference</abbr></th>
                          <th><abbr title="State">State</abbr></th>
                          <th><abbr title="zip code">Zip code</abbr></th>
                          <th><abbr title="Action">Action</abbr></th>
                        </tr>
                   { data_arr?.map((e,i)=>{ 
                      console.log(e);
                      return(
                        <>
                       
                        <tr key={i} className="action_row">
                        <td><abbr title={e["address"]}>{e["address"]}</abbr></td>
                          <td><abbr title={e["birth_date"]}>{e["birth_date"]}</abbr></td>
                          <td><abbr title={e["city"]}>{e["city"]}</abbr></td>
                          <td><abbr title={e["country"]}>{e["country"]}</abbr></td>
                          <td><abbr title={e["email"]}>{e["email"]}</abbr></td>
                          <td><abbr title={e["emergency_contact"]}>{e["emergency_contact"]}</abbr></td>
                          <td><abbr title={e["gender"]}>{e["gender"]}</abbr></td>
                          <td><abbr title={e["guardian"]}>{e["guardian"]}</abbr></td>
                          <td><abbr title={e["name"]}>{e["name"]}</abbr></td>
                          <td><abbr title={e["last_name"]}>{e["last_name"]}</abbr></td>
                          <td><abbr title={e["notes"]}>{e["notes"]}</abbr></td>
                          <td><abbr title={e["patient_id"]}>{e["patient_id"]}</abbr></td>
                          <td><abbr title={e["phone"]}>{e["phone"]}</abbr></td>
                          <td><abbr title={e["preference"]}>{e["preference"]}</abbr></td>
                          <td><abbr title={e["state"]}>{e["state"]}</abbr></td>
                          <td><abbr title={e["zip_code"]}>{e["zip_code"]}</abbr></td>
                          <td ><div className='btn_cell'>
                              <Button text={"Update"}/>
                              <Button style={{background:"transparent",border:"1px solid #FF0000",color:"#FF0000"}} text={"Delete"}/>
                            </div></td>
                        </tr>
                        </>
                    )
                  })}
                  </table> 
                  </div> 
          }

          {!search_res?
            // <button className='adding_patient_details' onClick={()=>{upload_Img()}}>Add</button>
            <button className='adding_patient_details' onClick={()=>{submit()}}>Add</button>
            :
            <button className='adding_patient_details' onClick={()=>{setsearch_res(false)}}>Add new patient</button>
          }
      </div>
  
    </div>
  
  )
}

export default Patient_details