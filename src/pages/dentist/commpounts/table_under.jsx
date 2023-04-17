import React, { useEffect, useState,useContext } from 'react'

import { AiOutlineStar } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import { IoWarningOutline } from 'react-icons/io5';
import { FaRegCheckCircle } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { IoReturnUpBack } from 'react-icons/io5';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { RiArrowGoForwardLine } from 'react-icons/ri';
import { AiFillLike } from 'react-icons/ai';
import {MainContext} from '../../../../utils/MainContext'
import Button from '../../../compounts/button/Button.jsx'
import Textarea from '../../../compounts/textarea/Textarea'
import Input from '../../../compounts/inputs/Input'
import './table_under.css'
import { redirect, useParams } from 'react-router-dom';


function table_under({table_under,patient_name}) {

    const [watch_on, setwatch_on] = useState(true)
    const [data_arr, setdata_arr] = useState()
    const{ pop, setpop} = useContext(MainContext)
    const{ saver, setsaver} = useContext(MainContext)
    const{data_type_id, setdata_type_id} = useContext(MainContext)
    const [comment_pop, setcomment_pop] = useState(false)
    const [comment_body_pop, setcomment_body_pop] = useState(false)
    const [tempData, settempData] = useState([])
    const [comment, setcomment] = useState('')
    const [teeth_no, setteeth_no] = useState("")
    // const{ table_under, settable_under} = useContext(MainContext)
    const [add_findings, setadd_findings] = useState(false)
    const{ tooth_numbering, settooth_numbering} = useContext(MainContext)

    const [findings, setfindings] = useState()
    const [tooth_no, settooth_no] = useState()
    const [parameters, setparameters] = useState()
    const [surface, setsurface] = useState()
    const [stage, setstage] = useState()
    const [detectoin_type, setdetectoin_type] = useState(1)
    const [comment_value, setcomment_value] = useState()
    const [comment_tooth_id, setcomment_tooth_id] = useState()
    
    const [commenttooth_arr, setcommenttooth_arr] = useState()
    const [tooth_commentarr, settooth_commentarr] = useState()
    const [addedtooth_arr, setaddedtooth_arr] = useState()
    const [add_subcomment, setadd_subcomment] = useState(true)
    const [sub_comment_st, setsub_comment_st] = useState()

    useEffect(() => {
             settempData(table_under)
    
             const pathname = window.location.pathname
             const patient_id = pathname.split("_")[0].split("/")[1]
             const img_no = pathname.split("_")[1].split(":")[1]
             
             fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_info`,{
                method: 'get',
                headers:{
                    patient_id:patient_id,
                    clinic_id:localStorage.getItem("clinic_id"),
                    img_no:img_no,
              
                },
            }).then((res)=>res.json())
            .then((data)=>{
                // console.log("info_Data",data);
                setaddedtooth_arr(data)
            })
    }, [])
    
     let commenttooth_arr_helper = []
    let sub_commenthelper=[]
    const tooth_checker=(e)=>{
        console.log('findings',e);
        if(e == "Caries/decay"){
            setdetectoin_type(2)
        }else if(e == "Filling"){
            setdetectoin_type(3)
        }else if(e == "Periodontitis"){
            setdetectoin_type(4)
        } else {
            setdetectoin_type(1)
        }
    }
   
const save_tooth =()=>{
    const pathname = window.location.pathname
    const patient_id = pathname.split("_")[0].split("/")[1]
    const img_no = pathname.split("_")[1].split(":")[1]
    console.log("info",findings,tooth_no,parameters,surface,stage);
    const date = new Date()

     fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_info`,{
                method: 'POST',
                headers:{"content-type":"application/json"},
                body:JSON.stringify({
                name:findings,
                teeth_no:tooth_no,
                parameter:parameters,
                surface:surface,
                stage:stage,
                type:"Manual",
                patient_name:patient_name[0],
                patient_id:patient_id,
                clinic_id:localStorage.getItem("clinic_id"),
                img_no:img_no,
                date:date,
                })
            }).then((res)=>res.json())
            .then((data)=>{
                location.reload()
                // console.log(data);
            })

}

const delete_dev = ()=>{
    document.querySelectorAll(".table_data").forEach(e => {
        // console.log("kiddos",e.getAttribute("datatype"));
        e.children[2].children[2].addEventListener("click",()=>{
            setpop(true)
            setsaver(e);  
            setdata_type_id(e.getAttribute("datatype"))
        })
       
    });
}





// const onsave=()=>{
//     fetch(`${import.meta.env.VITE_BACKEND_API}/clinic_info`,{
//         method:"POST",
//         headers:{"content-type":"application/json"},
//         body:JSON.stringify({
//           comment :comment,
//           teeth_no:teeth_no,
//       })
    
//     }).then((res)=>{
        
//         if(res.status == 200 ){
//          alert("works")
//         }else {
//           seterr(true)
//         }
//         })
      
// }

// const toggler = (e)=>{
//     console.log("sadasdasdasdasd");
//     // console.log(e.currentTarget.getAttribute("id").split("no")[1]);
//     const item_id = e.currentTarget.getAttribute("id")
//     const element_no = e.currentTarget.getAttribute("id").split("no")[1]
//     const isactive = document.getElementById(item_id).classList.contains("focused_table_data")

// console.log(document.getElementById(item_id).classList.contains("focused_table_data"));
//     if(!isactive == false){
//         console.log("isactive",!isactive);
//         document.getElementById(item_id).classList.remove("focused_table_data")
//     }else {
//         document.getElementById(item_id).classList.add("focused_table_data")
//     }
    

// }

const focus_mode = (e)=>{
// toggler(e)
console.log(e.currentTarget.getAttribute("id").split("no")[1]);
const item_id = e.currentTarget.getAttribute("id")
const element_no = e.currentTarget.getAttribute("id").split("no")[1]
const isactive = document.getElementById(item_id).classList.contains("focused_table_data")

if(!isactive == false){
    document.querySelectorAll(".table_data").forEach(e => {
        // e.style.background="unset"
        e.classList.remove("focused_table_data")
    });
}else {
    document.querySelectorAll(".table_data").forEach(e => {
        // e.style.background="unset"
        e.classList.remove("focused_table_data")
    });
    document.getElementById(item_id).classList.add("focused_table_data")
}



const isactive2 = document.getElementById(`imgno_${element_no}`).classList.contains("focused_tooth_mask")

if(!isactive2 == false){
    document.querySelectorAll(".teeth_masks").forEach(e => {
        // e.style.background="unset"
        e.classList.remove("focused_tooth_mask")
        e.style.opacity="1"
    });
}else {
    document.querySelectorAll(".teeth_masks").forEach(e => {
        // e.style.background="unset"
        e.style.opacity="0"
        e.classList.remove("focused_tooth_mask")
    });
    document.getElementById(`imgno_${element_no}`).classList.add("focused_tooth_mask")
}



}


const commnet = ()=>{
     
    const pathname = window.location.pathname
    const patient_id = pathname.split("_")[0].split("/")[1]
    const img_no = pathname.split("_")[1].split(":")[1]

     document.querySelectorAll(".table_data").forEach(e => {
        e.children[4].addEventListener("click",()=>{
            // setpop(true)
            // setsaver(e);  
            // setdata_type_id(e.getAttribute("datatype"))
            setcomment_tooth_id(e.getAttribute("datatype"))
            


            fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_comments`,{
                method:"GET",
                headers:{
                    patient_id:patient_id,
                    clinic_id:localStorage.getItem("clinic_id"),
                    img_no:img_no,
                    tooth_id:e.getAttribute("datatype"),
                },
             }).then((res)=>res.json())
             .then((data)=>{
                settooth_commentarr(data)
                data.forEach(e => {
                    // console.log("theredea",e.comment);
                    // commenttooth_arr.push(e.comment)
                    
                    commenttooth_arr_helper.push(e.comment)
                });

                
             }).then((redirect)=>{
                setcommenttooth_arr(commenttooth_arr_helper)
                setcomment_pop(true)

             })
        })
       
    });
   
    

}

const add_sub_comment =()=>{
    const pathname = window.location.pathname
    const patient_id = pathname.split("_")[0].split("/")[1]
    const img_no = pathname.split("_")[1].split(":")[1]

document.querySelectorAll(".comment_card_body").forEach(e => {
     console.log("kids",  e.children[1].children[3].children[1]);
    const btn = e.children[1].children[3].children[1]
    const tooth_id = e.getAttribute("datatype")
    const comment = e.children[1].children[0].innerHTML
    const comment_id = e.getAttribute("data-id")

   

    e.children[1].children[3].children[1].click()

    btn.addEventListener("click",(el)=>{
        sub_commenthelper.push(sub_comment_st);
        e.children[1].children[3].children[1].click()
        fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_comments_info`,{
            method:"GET",
            headers:{
                patient_id:patient_id,
                clinic_id:localStorage.getItem("clinic_id"),
                img_no:img_no,
                tooth_id:tooth_id,
                comment_id:comment_id,
            },
         }).then((res)=>res.json())
         .then((data)=>{
            console.log("getdata",data[0].sub_comment);
             if( data[0].sub_comment == null){
                // alert("null")
                //  sub_commenthelper.push(data[0].sub_comment)
             }else{
                JSON.parse(data[0].sub_comment).forEach(e => {
                    // alert("array")
                    sub_commenthelper.push(e)
                });
            }
          
         }).then((done)=>{
            fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_comments`,{
                method:"PUT",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({
                    patient_id:patient_id,
                    clinic_id:localStorage.getItem("clinic_id"),
                    img_no:img_no,
                    tooth_id:tooth_id,
                    // user:localStorage.getItem("token"),
                    // data:date,
                    comment_id:comment_id,
                    sub_comment:sub_commenthelper,
                })
             }).then((res)=>res.json())
             .then((data)=>{
               setsub_comment_st("")
               setcomment_pop(false)
             })
         })

        


    })

});

    
}


const comment_dev = ()=>{
    commenttooth_arr_helper.push(comment_value);

    const pathname = window.location.pathname
    const patient_id = pathname.split("_")[0].split("/")[1]
    const img_no = pathname.split("_")[1].split(":")[1]
    const date = new Date()
    
    // tooth_commentarr.forEach(e => {
    //     commenttooth_arr_helper.push(e.sub_comment)
    // });

    console.log("workssss",commenttooth_arr_helper);


    fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_comments`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            patient_id:patient_id,
            clinic_id:localStorage.getItem("clinic_id"),
            img_no:img_no,
            tooth_id:comment_tooth_id,
            user:localStorage.getItem("token"),
            // comment:commenttooth_arr_helper,
            comment:comment_value,
            date:date
        })
     }).then((res)=>res.json())
     .then((data)=>{
       setcomment_value("")
       setcomment_pop(false)
     })
  
}

  return (
    <div style={{height:"100%",position:"relative"}}>
    
{comment_pop&&
    <div className='comment_background'>
            <div className='comment_body'>
                <h5>Add a comment</h5>
                <div className='add_comment_btn'>
                    {!comment_body_pop ?
                        <div className='add_comment_btn_class' onClick={()=>{setcomment_body_pop(true)}} ><IoMdAdd/></div>
                        :
                        <div className='add_comment_btn_class' onClick={()=>{setcomment_body_pop(false)}} ><IoReturnUpBack/></div>
                    }
                   
                </div>
                {comment_body_pop ?
                    <>
                        <Textarea value={comment_value} onChange={(e)=>{setcomment_value(e.target.value)}} />
                        <div className='lower_part_delete_t'>
                            <Button style={{width:"100%",background:"transparent",border:"grey 1px solid",color:"white"}} text={"cancel"} onclick={()=>{setcomment_pop(false)}}/>
                            <Button text={"save"} style={{width:"100%"}} onclick={()=>{ comment_dev()}}/>
                        </div>
                    </>:
                    <>
                        <div className='comment_body_map'>
                            
                             {/* tooth_commentarr[0].comment?.split(",")? */}
                            {tooth_commentarr?.map((e,i)=>{
                            //  console.log('workszxcs',JSON.parse(e.sub_comment));
                             
                                return(
                                    <div className='comment_card_body' data-id={e.comments_id} datatype={e.tooth_id}>
                                        <h4>{e.user}</h4>

                                        <div className='comment_row_body'>   
                                            <div className='comments_here' key={i}>{e.comment} </div>
                                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                                  <div className='comment_date'>{e.date.split("T")[0]}</div>

                                                  <div style={{display:"flex",gap:"5px"}}>
                                                         <div className='add_comment_btn_class' onClick={()=>{setadd_subcomment(!add_subcomment)}} ><IoMdAdd/></div>
                                                         <div className='add_comment_btn_class' style={{background:"rgb(203 46 46"}} onClick={()=>{}} ><BsFillTrash3Fill/></div>
                                                         <div className='add_comment_btn_class' style={{background:"rgb(45 153 144)"}} onClick={()=>{}} ><AiFillLike/></div>
                                                  </div>
                                            </div>
                                            {/* <div>{e.sub_comment.forEach((f)=>{})}</div> */}
                                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",gap:"6px"}} >
                                                    {JSON.parse(e.sub_comment)?.map((ele,t)=>{
                                                        return(
                                                                <div style={{color:"grey"}} key={t} >{`replied: ${ele}`}</div> 
                                                        )})}

                                                        {/* <div style={{color:"grey"}} key={t} >{`replied: ${JSON.parse(e.sub_comment)[0]}`}</div>   */}
                                                </div>
                                                
                                           {add_subcomment&&
                                           <>
                                            <Input value={sub_comment_st} onChange={(e)=>{setsub_comment_st(e.target.value)}} placeholder={"Enter your comment"}/>
                                            <div className='sub_comment_btns'>
                                                <Button style={{width:"23%",padding:"6px",background:"transparent",border:"grey 1px solid",color:"white"}} text={"Cancel"} onclick={()=>{setadd_subcomment(false)}}/>
                                                <Button style={{width:"23%"}} text={"save"} onClickCapture={()=>{add_sub_comment()}}/>
                                            </div>
                                           </>
                                           }
                                        </div>
                                  
                                    </div>
                                    
                                )
                             
                               
                                })
                            }
                        
                        </div>
                        
                      <Button style={{width:"100%",background:"transparent",border:"grey 1px solid",color:"white"}} text={"cancel"} onclick={()=>{setcomment_pop(false)}}/>
                    </>
                    }
                
            </div>
    </div>
}

        <div className='table_body'>
                <div className='table_header'>
                    <h3>Tooth</h3>
                    <h3>Filling</h3>
                    <h3>actions</h3>
                    <h3>Surface</h3>
                    <h3>Comments</h3>
                </div>

                <div className='vist_level'>Visit level</div>

                <div className='table_data_organizer'>

                {

                // table_under?.map((e,i)=>{
                    // console.log("table_under",e);
                    // return(
                    //     <div className='table_data' id={`table_no${i}`} onClick={(e)=>{focus_mode(e)}} key={i} >
                    //     <div style={{display:"flex",justifyContent:"center"}}>
                    //         <div className='tooth_class'>12</div>
                    //     </div>

                    //     <div style={{display:"flex",justifyContent:"flex-start"}}>
                    //         <div className='finding_table'>
                    //              <div >{e[0]}</div>
                    //             <div className='tags_Dev'>
                    //                 <div className="tagged_elem">ai</div>
                    //                 {/* <div className="tagged_elem">{e[1]}</div> */}
                    //             </div>
                    //         </div>
                    //     </div>
                        
                    
                    //     <div className='rest_td'>
                    //     {/* { watch_on?
                    //         <AiOutlineStar size={21} className='icon_in_table' onClick={()=>{setwatch_on(!watch_on)}}/>:
                    //         <AiFillStar size={21} className='icon_in_table' color='#FFDF00' onClick={()=>{setwatch_on(!watch_on)}}/>
                    //         } */}
                    //             <FaRegCheckCircle size={20} color="#4BB543" onClick={()=>{tempData[i][5] = true}} className='icon_in_table'/>
                    //             <IoWarningOutline size={20} color=" #eed202" onClick={()=>{tempData[i][5] = false}} className='icon_in_table'/>
                    //             <ImCancelCircle size={20} color="#B33A3A " onClickCapture={()=>{delete_dev()}} className='icon_in_table'/>
                    //     </div>
                    //     <div className='rest_td ' >.</div>
                    //     <div style={{display:"flex",justifyContent:"space-around"}}>
                        
                    //         <BiCommentAdd size={24} className='icon_in_table' onClick={()=>{setcomment_pop(true)}} />
                    //     </div>

                    //    </div>
                    // )
                // })
                }
                {addedtooth_arr?.map((e,i)=>{
                    console.log("table_under",addedtooth_arr.length);
                    if(addedtooth_arr.length == 0){
                        location.reload()
                    }else{
                    return(
                        <div className='table_data' id={`table_no${i}`} datatype={e["id"]} onClick={(e)=>{focus_mode(e)}} key={i} >
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className='tooth_class'>{e["teeth_no"]}</div>
                        </div>

                        <div style={{display:"flex",justifyContent:"flex-start"}}>
                            <div className='finding_table'>
                                <div >{e["name"]}</div>
                                {/* <div >{e[0]}</div> */}
                                <div className='tags_Dev'>
                                    <div className="tagged_elem">{e["type"]}</div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className='rest_td'>
                        {/* { watch_on?
                            <AiOutlineStar size={21} className='icon_in_table' onClick={()=>{setwatch_on(!watch_on)}}/>:
                            <AiFillStar size={21} className='icon_in_table' color='#FFDF00' onClick={()=>{setwatch_on(!watch_on)}}/>
                            } */}
                                <FaRegCheckCircle size={20} color="#4BB543" onClick={()=>{tempData[i][5] = true}} className='icon_in_table'/>
                                <IoWarningOutline size={20} color=" #eed202" onClick={()=>{tempData[i][5] = false}} className='icon_in_table'/>
                                <ImCancelCircle size={20} color="#B33A3A " onClickCapture={()=>{delete_dev()}} className='icon_in_table'/>
                        </div>
                        <div className='rest_td ' >{e["surface"]}</div>
                        <div style={{display:"flex",justifyContent:"space-around"}} onClickCapture={()=>{commnet()}}>
                        
                            <BiCommentAdd size={24} className='icon_in_table'  />
                        </div>

                       </div>
                    )
                     }
                })
                }
   
               </div>
                
                <div className='btn_cont_table' style={{position:"relative"}}>
                    {add_findings&&
                        <div className='list_class'>
                            <div className='selects_cont_class'>
                                <div className='add_toothmenu_title'>Add new findings</div>

                                <select id="" value={findings}  onChange={(e)=>{setfindings(e.target.value);tooth_checker(e.target.value)}} className='select_class_table_under'>
                                    <option value="" hidden selected disabled>Set new findings</option>
                                    <option value="Caries/decay">Caries/decay</option>
                                    <option value="Filling">Filling</option>
                                    <option value="Tooth">Tooth</option>
                                    <option value="Crown">Crown</option>
                                    <option value="Endodontic treatment">Endodontic treatment</option>
                                    <option value="Implant">Implant</option>
                                    <option value="Missing tooth">Missing tooth</option>
                                    <option value="Apical lucency">Apical lucency</option>
                                    <option value="Periodontitis">Periodontitis</option>
                                    <option value="Pontic">Pontic</option>
                                    <option value="Impacted tooth">Impacted tooth</option>
                                </select>

                                <select value={tooth_no} onChange={(e)=>{settooth_no(e.target.value)}} id="" className='select_class_table_under'>
                                    <option value=""  hidden selected disabled>Select tooth number</option>
                                    {  tooth_numbering.sort(function(a, b)
                                    { return a - b;}).map((e,i)=>{
                                        // console.log("numbering",e);
                                        return(
                                            <option value={e}>{e}</option>
                                        )
                                    })

                                    }

                                </select>

                            {detectoin_type == 2 && 
                                <select value={surface} onChange={(e)=>{setsurface(e.target.value)}} className='select_class_table_under' id="">
                                    <option value=""hidden selected disabled > Select surface</option>
                                    <option value="F">F</option>
                                    <option value="I">I</option>
                                    <option value="D">D</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            }
                            {detectoin_type == 3 && 
                                <select value={surface} onChange={(e)=>{setsurface(e.target.value)}} className='select_class_table_under' id="">
                                    <option value=""hidden selected disabled > Select surface</option>
                                    <option value="D">D</option>
                                    <option value="B">B</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            }

                            { detectoin_type ==3 &&
                               <select value={parameters} onChange={(e)=>{setparameters(e.target.value)}} className='select_class_table_under' id="">
                                    <option value=""hidden selected disabled > Select Parameters</option>
                                    <option value="Composite filling">Composite filling</option>
                                    <option value="Amalgam filling">Amalgam filling</option>
                                </select>
                            }
                               
                               {detectoin_type ==4 &&
                                <select value={stage} onChange={(e)=>{setstage(e.target.value)}} className='select_class_table_under' id="">
                                    <option value=""hidden selected disabled > Select Paramaters</option>
                                    <option value="Stage 1">Stage 1</option>
                                    <option value="Stage 2">Stage 2</option>
                                    <option value="Stage 3">Stage 3</option>
                                    <option value="Stage 4">Stage 4</option>
                                </select>
                                }
                                    <div className='lower_part_add_tooth'>
                                        <button className='curclair_btn2' onClick={()=>{save_tooth();setadd_findings(false)}} style={{background:"#4BB543",width:"100%"}} >Add</button>
                                        <button className='curclair_btn2' onClick={()=>{setadd_findings(false)}} style={{width:"100%"}} >Cancel</button>
                                    </div>
                            </div>
                        </div>
                    }
                    <div className='butn_group1'>
                        <button className='curclair_btn'  onClick={()=>{setadd_findings(true)}}><RiAddFill size={19}/></button>
                        <button className='curclair_btn'><RiArrowGoBackLine/></button>
                        <button className='curclair_btn'><RiArrowGoForwardLine/></button>
                    </div>
                    
                    <div className='butn_group1'>
                            <button className='curclair_btn2'>Save</button>
                            {/* <button className='non_border_btn'>Save</button> */}
                            <button className='curclair_btn2'>Analyze</button>
                            <button className='curclair_btn2'>Report</button>
                    </div>
                </div>
        </div>




    </div>
  )
}

export default table_under