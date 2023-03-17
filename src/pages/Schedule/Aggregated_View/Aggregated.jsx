import React from 'react'
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
import { GiToothbrush } from 'react-icons/gi';



function Aggregated() {
  return (
    <div style={{width:"98%",margin:"0 auto"}}>
        <div className='header_bar_agg'>
            <div className='day_display_agg'>Today</div>
            <div className='date_changer_agg'>
                <IoIosArrowBack/>
                <div className='date_calender_agg'><AiOutlineCalendar/> Friday Mar 3</div>
                <MdNavigateNext/>
            </div>
        </div>

        <div className='long_dev_agg' >
            <div className='wid_cont_agg' style={{width:"13%"}}>
                  <div className='info_agg_title'><IoPeople/>Patients</div>
                  <div className='info_agg_value'>7</div>
            </div>

            <div className='wid_cont_agg' style={{width:"17%"}}>
                  <div className='info_agg_title'><FaXRay/>Needed x-Rays</div>
                  <div className='info_agg_value'>6</div>
            </div>

            <div className='big_wid_agg_cont'>

              <div className='small_wid_agg' style={{display:"flex",alignItems:"center"}}>
                <div className='small_wid_title' style={{gap:"10px",display:"flex"}}><FaTooth/>Opportunity</div>
                <div className='same_wid_value'>10</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Perio <br/> Maintenance</div>
                <div className='same_wid_value'>1</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Scaling</div>
                <div className='same_wid_value'>0</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Endo</div>
                <div className='same_wid_value'>1</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Impact</div>
                <div className='same_wid_value'>1</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Restoration<br/>Replacement</div>
                <div className='same_wid_value'>1</div>
              </div>

              <div className='small_wid_agg'>
                <div className='small_wid_title'>Restoration</div>
                <div className='same_wid_value'>5</div>
              </div>
              <div className='small_wid_agg'>
                <div className='small_wid_title'>Impaction</div>
                <div className='same_wid_value'>1</div>
              </div>

            </div>
        </div>

    <div className='sec_part_agg'>
        <div className='sec_part_header'>
          <div className='title_sec_part'>Daily Patients (02/10/2023)</div>
          <div><input className='input_sec_part' type="date" /></div>
        </div>

        <div className='sec_part_wids'>
            <div className='wid_itself'>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Due For Bitewings</div>
                   <div className='value_sec_wid'>37</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <FaTeeth size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>

            <div className='wid_itself'>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Due For Perio Chart</div>
                   <div className='value_sec_wid'>38</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <ImTable size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>

            <div className='wid_itself' style={{borderColor:"#B2ABCF"}}>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Potential Periodontal <br/> Condition</div>
                   <div className='value_sec_wid'>5</div>
              </div>  
                  
                  <div className='wid_column_group2'>
                          <GiToothbrush size={21}/>
                          <AiFillQuestionCircle size={21}/>
                  </div>
            </div>

            <div className='wid_itself' style={{borderColor:"#B2ABCF"}}>
              <div className='wid_column_group'>
                   <div className='title_sec_wid'>Potential Caries</div>
                   <div className='value_sec_wid'>45</div>
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