import React, { useEffect,useState,useContext } from 'react'
import './Aggregated.css'
import { IoIosArrowBack } from 'react-icons/io';
import { IoPeople } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import { FaXRay } from 'react-icons/fa';
import { FaTooth } from 'react-icons/fa';
import { FaTeeth } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { ImTable } from 'react-icons/im';
import {MainContext} from '../../../../utils/MainContext'
import { GiToothbrush } from 'react-icons/gi';



function Aggregated() {

  const [patients_numb, setpatients_numb] = useState()
  const{added_date, setadded_date} = useContext(MainContext)
  // const date = new Date
  // console.log("date",date.getDate(),date.getMonth(),date.getFullYear());
  var date = new Date();

  var day = date.getDate()
  var  month = date.getMonth() + 1
  var  year = date.getFullYear()
  var  hour = date.getHours()
  var  min  = date.getMinutes();
  
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  
  var today = year + "-" + month + "-" + day
   
  
  

  console.log("date",`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  const [input_date, setinput_date] = useState(today)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/render_patients`,{
      method:"get",
      headers:{
        clinic_id:localStorage.getItem("clinic_id"),
        clinic_name: localStorage.getItem("clinic_name")
      }
    }).then((res)=>res.json())
    .then((data)=>{
      console.log("render_pat",data.length);
      setpatients_numb(data.length)

      // setpatients(data)
    })
    setadded_date(input_date)
}, [])

  return (
    <div style={{width:"98%",margin:"0 auto"}}>
        {/* <div className='header_bar_agg'>
            <div className='day_display_agg'>Today</div>
            <div className='date_changer_agg'>
                <IoIosArrowBack/>
                <div className='date_calender_agg'><AiOutlineCalendar/> Friday Mar 3</div>
                <MdNavigateNext/>
            </div>
        </div> */}

        <div className='sec_part_header'>
          <div className='title_sec_part'>{`Daily Patients ${input_date}`}</div>
          <div><input value={input_date}  onChange={(e)=>{setinput_date(e.target.value);setadded_date(e.target.value)}} className='input_sec_part' type="date" /></div>
        </div>

        <div className='long_dev_agg' >
            <div className='wid_cont_agg' style={{width:"13%"}}>
                  <div className='info_agg_title'><IoPeople/>Patients</div>
                  <div className='info_agg_value'>{patients_numb}</div>
            </div>

            <div className='wid_cont_agg' style={{width:"17%"}}>
                  <div className='info_agg_title'><FaXRay/>Needed x-Rays</div>
                  <div className='info_agg_value'>0</div>
            </div>

            <div className='big_wid_agg_cont'>

              <div className='small_wid_agg' style={{display:"flex",alignItems:"center"}}>
                <div className='small_wid_title' style={{gap:"10px",display:"flex"}}><FaTooth/>Opportunity</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Perio <br/> Maintenance</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Scaling</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Endo</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Impact</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Restoration<br/>Replacement</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Restoration</div>
                <div className='same_wid_value'>0</div>
              </div>
              <div className='small_wid_agg'>
                <div className='small_wid_title'>Impaction</div>
                <div className='same_wid_value'>0</div>
              </div>

            </div>
        </div>

    <div className='sec_part_agg'>
       

        <div className='sec_part_wids'>
            <div className='wid_itself'>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Due For Bitewings</div>
                   <div className='value_sec_wid'>0</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <FaTeeth size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>

            <div className='wid_itself'>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Due For Perio Chart</div>
                   <div className='value_sec_wid'>0</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <ImTable size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>

            <div className='wid_itself' style={{borderColor:"#B2ABCF"}}>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Potential Periodontal <br/> Condition</div>
                   <div className='value_sec_wid'>0</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <GiToothbrush size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>

            <div className='wid_itself' style={{borderColor:"#B2ABCF"}}>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Potential Caries</div>
                   <div className='value_sec_wid'>0</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <FaTooth size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>
        </div>

    </div>


    </div>
  )
}

export default Aggregated