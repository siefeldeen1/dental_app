import React, { useEffect, useState,useContext } from 'react'
import './Patient.css'
import { AiOutlineSearch  } from 'react-icons/ai';
import { AiFillIdcard  } from 'react-icons/ai';
import {MainContext} from '../../../../utils/MainContext'
import { useNavigate } from "react-router-dom";




function Patient_view() {
  const navigate = useNavigate();

  const [patients, setpatients] = useState([])
  const{ view_Imgs, setview_Imgs} = useContext(MainContext)
  const{ patient_name, setpatient_name} = useContext(MainContext)
  const{ patient_id, setpatient_id} = useContext(MainContext)
  
  useEffect(() => {
      fetch(`${import.meta.env.VITE_BACKEND_API}/render_patients`,{
        method:"get",
        headers:{
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name: localStorage.getItem("clinic_name")
        }
      }).then((res)=>res.json())
      .then((data)=>{
        console.log("render_pat",data);
        setpatients(data)
      })
  }, [])
  
const user_Imgs= ()=>{
  document.querySelectorAll(".patients_table").forEach(e => {
    const clinic_id = e.children[0].innerHTML
    const patient_id = e.children[1].innerHTML
    const first = e.children[2].innerHTML
    const last = e.children[3].innerHTML
    const button = e.children[5]
    button.addEventListener("click",()=>{
      fetch(`${import.meta.env.VITE_BACKEND_API}/patient_Img`,{
        method:"GET",
        headers:{
          clinic_id:clinic_id,
          patient_id:patient_id,
          first:first,
          last:last
        }
      }).then((res)=> res.json())
      .then((data)=>{
        console.log('daata21',data[0].imgs);
        setview_Imgs(data[0].imgs)
        setpatient_name([first,last])
        setpatient_id(patient_id)
      }).then((redirect)=>{
        navigate('/view_imges')
      })

      console.log("asdas",clinic_id,patient_id,first,last);
    })
  });
}

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
                            <th>clinic id</th>
                            <th>patient id</th>
                            <th>Patient first Name</th>
                            <th>Patient last Name</th>
                            <th>time stamp</th>
                            <th>images</th>
                        </tr>

                      { patients.map((e,i)=>{
                        return(
                          <tr key={i} className="patients_table">
                              <td>{localStorage.getItem("clinic_id")}</td>
                              <td>{e["patient_id"]}</td>
                              {/* <td><AiFillIdcard/> 82202</td> */}
                              <td>{e["name"]}</td>
                              <td>{e["last_name"]}</td>
                              <td></td>
                              {/* <td>MODERATE2</td> */}
                              {/* <td ><div className='findings_table'> 2 Surface Restoration - Interproximal Caries - #14,21</div></td> */}
                              <td><div className='img_radiography' onClickCapture={user_Imgs} >Images</div> </td>
                         </tr>
                        )
                      })
                     
                    }
                    
                    </table>
        </div>
 
</div>
  )
}

export default Patient_view