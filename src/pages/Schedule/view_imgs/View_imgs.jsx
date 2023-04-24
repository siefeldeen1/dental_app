import React,{useContext,useEffect,useState} from 'react'
import {MainContext} from '../../../../utils/MainContext'
import './View_imgs.css'
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
function View_imgs() {
    const{ view_Imgs, setview_Imgs} = useContext(MainContext)
    const{ patient_name, setpatient_name} = useContext(MainContext)
    const{ patient_id, setpatient_id} = useContext(MainContext)

    const navigate = useNavigate();

         console.log(JSON.parse(view_Imgs));
         console.log(patient_name);
       console.log("patient_id",patient_id);

    const onclick= (e)=>{
        console.log("eclicked",e.currentTarget.getAttribute("datatype"));
        const img_no = e.currentTarget.getAttribute("datatype")
        navigate(`/${patient_id}_img:${img_no}`)
    }

  return (
    <div>
        <header className='header_body_viewimgs'>
            <div className='goback_viewimgs' onClick={()=>{navigate('/Schedule')}}><BiArrowBack/> go back </div>
            <div className='patient_name_class'>
                {`${patient_name[0]} ${patient_name[1]}'s images`}
            </div>
        </header>
            <div className='view_imgs_grid'>
                {JSON.parse(view_Imgs)?.map((e,i)=>{
                    console.log('adssada',e);
                    return(
                        <img key={i} datatype={`${i}`} onClick={(e)=>{onclick(e)}} className="imgs_inview_imgs" src={`${import.meta.env.VITE_BACKEND_API}/${e}`} alt="" />
                    )
                })

                }
            </div>
    </div>
  )
}

export default View_imgs