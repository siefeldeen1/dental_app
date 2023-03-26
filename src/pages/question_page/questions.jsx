import React,{useState,useEffect} from 'react'
import './questions.css'
import { useNavigate } from "react-router-dom";
import { BsFillInfoCircleFill } from 'react-icons/bs';


function questions() {
const navigate = useNavigate() 
const [disbled, setdisbled] = useState(true)



const submit =()=>{
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

  const Date_real =`${day}-${month}-${year}`
  const patient = document.querySelector("#patient")
  const practice = document.querySelector("#practice")
  const lab = document.querySelector('#lab')
  const doctor = document.querySelector('#doctor')
  const radiologist = document.querySelector('#radiologist')


  // fetch("http://localhost:8082/insert",{
  fetch("http://localhost:8082/insert",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
      Date :Date_real,
      Patient_Name:patient.value,
      Practice:practice.value,
      Lab:lab.value,
      Doctor:doctor.value,
      Radiologist:radiologist.value
      
  })

}).then((res)=>{
    console.log('llll',res.status);
    if(res.status == 200 ){
      navigate('/main_page')
    }else {
      seterr(true)
    }
    })
}

const changing = ()=>{
 const input = document.querySelectorAll('.input_text')
 const arr = Array.from(input)

 console.log(input);

 for (let i = 0; i < input.length; i++) {
  
  if(input[i].value.length > 0){
    setdisbled(false)
  }else if((input[0].value.length == 0) &&(input[1].value.length == 0)&&(input[2].value.length == 0)&&(input[3].value.length == 0)&&(input[4].value.length == 0)) {
    setdisbled(true)
  }
  
  // if(arr[i].value.length > 0){
  //   setdisbled(false)
  // }else if((arr[0].value.length == 0)|| (arr[1].value.length == 0)){
  //   setdisbled(true)
  // }
}

}



  return (
    <div style={{height:"100vh"}}>

      <div style={{display:"flex",justifyContent:"center" ,paddingTop:"13px",marginBottom:"20px"}}>
        <h1 style={{color:"white",}}>Please answer at least one of the following questions to proceed</h1>
      </div>
        
        <div className='big_cont'>

            <div className='cont_lab_inp'>
              <label className='label_for_inp' htmlFor="">Patient Name</label>

              <div className='info_inp'>
                 <input className='input_text' type="text" id='patient' placeholder='Please enter the patient Name' onChange={(e)=>{changing(e)}}/>
                 <abbr title="if images are for particular patient"><BsFillInfoCircleFill size={20} style={{color:"#A667E4"}}/></abbr>
              </div>
           
            </div>

            <div className='cont_lab_inp'>
              <label className='label_for_inp' htmlFor="">Practice Name</label>
              
              <div className='info_inp'>
                <input className='input_text' type="text" id='practice' placeholder='Please enter the practice Name' onChange={(e)=>{changing(e)}}/>
                <abbr title="if images are for particular practice or office"><BsFillInfoCircleFill size={20} style={{color:"#A667E4"}}/></abbr>
              </div>
            </div>

            <div className='cont_lab_inp'>
              <label className='label_for_inp' htmlFor="">Lab Name  </label>

              <div className='info_inp'>
                <input className='input_text' type="text" id='lab' placeholder='Please enter the Lab Name' onChange={(e)=>{changing(e)}}/>
                <abbr title="for dental labs"><BsFillInfoCircleFill size={20} style={{color:"#A667E4"}}/></abbr>
               </div>
            </div>

            <div className='cont_lab_inp'>
              <label className='label_for_inp' htmlFor=""> Doctor name</label>
              <input className='input_text' type="text" id='doctor' placeholder='Please enter the doctor name' onChange={(e)=>{changing(e)}}/>
            </div>

            <div className='cont_lab_inp'>
              <label className='label_for_inp' htmlFor="">Radiologist name</label>
              <input className='input_text' type="text" id='radiologist' placeholder='Please enter the Radiologist' onChange={(e)=>{changing(e)}}/>
            </div>


          <div style={{display:"flex",justifyContent:"center"}}>
            <button className='proceed_btn' disabled={disbled} onClick={()=>{submit()}} >Upload image</button>
          </div>

        </div>

    </div>
  )
}

export default questions