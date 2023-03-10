import React from 'react'
import './sider_bar.css'
import { MdOutlineEventNote } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiClinic  } from 'react-icons/bi';
import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { BsTelephone  } from 'react-icons/bs';
import { CgSmartphoneChip } from 'react-icons/cg';

function side_bar() {
  return (
    <div className='side_bar_Class'>
            <div className='side_bar_element'>
                <MdOutlineEventNote size={22}/>
                <div className='icon_name'>Schedule</div>
            </div>

            <div className='side_bar_element'>
                <RxPerson   size={22}/>
                <div className='icon_name'>patient details</div>
            </div>

            <div className='side_bar_element'>
                <AiOutlinePieChart  size={22}/>
                <div className='icon_name'>patient Dashboard</div>
            </div>

            <div className='side_bar_element'>
                <BiClinic  size={22}/>
                <div className='icon_name'>Assessment Assist </div>
            </div>

            <div className='side_bar_element'>
                <RiMoneyPoundCircleLine  size={22}/>
                <div className='icon_name'>Dashboard </div>
            </div>

            <div className='side_bar_element'>
                <BsTelephone  size={22}/>
                <div className='icon_name'>Configuration </div>
            </div>

          
    </div>
  )
}

export default side_bar