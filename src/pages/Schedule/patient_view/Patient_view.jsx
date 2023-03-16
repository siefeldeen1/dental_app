import React from 'react'
import './Patient.css'
import { AiOutlineSearch  } from 'react-icons/ai';
import { AiFillIdcard  } from 'react-icons/ai';


function Patient_view() {
  return (
    <div className='table_big_dev'>
      <div className='table_header_group'>
            <div className='search'>
                <AiOutlineSearch/>
                <input className='search_input' placeholder='search' type="text" />
            </div> 
        </div>  

        <div className='bigger_dev_table_cont'>
            <div className='table_header_title'>Daily patients <span className='span_table_header_title'>(02/10/2023)</span></div>
            <hr className='hr_table_header_title' />
                <table>
                        <tr>
                            <th>ApptTime</th>
                            <th>Next Appt</th>
                            <th>Patient Name</th>
                            <th>Age</th>
                            <th>Provider</th>
                            <th>Today's Tx</th>
                            <th>Operatory</th>
                            <th>Findings</th>
                            <th>Radiographs</th>
                        </tr>
                        <tr>
                            <td>8:00 AM</td>
                            <td></td>
                            <td><AiFillIdcard/> 82202</td>
                            <td>39</td>
                            <td>SK</td>
                            <td></td>
                            <td>MODERATE2</td>
                            <td ><div className='findings_table'> 2 Surface Restoration - Interproximal Caries - #14,21</div></td>
                            <td><div className='img_radiography'>Images</div> </td>
                        </tr>
                    
                    
                    </table>
        </div>
 
</div>
  )
}

export default Patient_view