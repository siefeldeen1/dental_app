import React, { useEffect, useState,useContext } from 'react'

import { AiOutlineStar } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import { IoWarningOutline } from 'react-icons/io5';
import { FaRegCheckCircle } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { RiArrowGoForwardLine } from 'react-icons/ri';
import {MainContext} from '../../../../utils/MainContext'
import Button from '../../../compounts/button/Button.jsx'
import Textarea from '../../../compounts/textarea/Textarea'

function table_under(props) {
    const [watch_on, setwatch_on] = useState(true)
    const [data_arr, setdata_arr] = useState()
    const{ pop, setpop} = useContext(MainContext)
    const{ saver, setsaver} = useContext(MainContext)
    const [comment_pop, setcomment_pop] = useState(false)
    const [tempData, settempData] = useState([])
    const [comment, setcomment] = useState('')
    const [teeth_no, setteeth_no] = useState("")
    const{ table_under, settable_under} = useContext(MainContext)
    useEffect(() => {
     
        // fetch("${import.meta.env.VITE_BACKEND_API}/json_test",{
//         fetch(`${import.meta.env.VITE_BACKEND_API}/json_test`,{
//             "headers" : {
//                 'Content-Type': 'application/json'
//             },
//         }).then((res)=>res.json())
// .then((data)=>{console.log("test_Data2",Object.values(data.Output));

//         setdata_arr(Object.values(data.Output))
//         settempData(Object.values(data.Output))
//         })

            // setdata_arr(props.table_under)
             settempData(props.table_under)

    }, [])
    

   


const delete_dev = ()=>{
    document.querySelectorAll(".table_data").forEach(e => {
        // console.log("kiddos",e.children[2].children[2]);
        e.children[2].children[2].addEventListener("click",()=>{
            setpop(true)
            setsaver(e);  
        })
       
    });
}

const comment_dev = ()=>{
    document.querySelectorAll(".table_data").forEach(e => {
        // console.log("kiddos",e.children[2].children[2]);
        e.children[2].children[2].addEventListener("click",()=>{
            setpop(true)
            setsaver(e);  
        })
       
    });
  
}



const onsave=()=>{
    fetch(`${import.meta.env.VITE_BACKEND_API}/clinic_info`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          comment :comment,
          teeth_no:teeth_no,
      })
    
    }).then((res)=>{
        
        if(res.status == 200 ){
         alert("works")
        }else {
          seterr(true)
        }
        })
      
}

const toggler = (e)=>{
    console.log("sadasdasdasdasd");
    // console.log(e.currentTarget.getAttribute("id").split("no")[1]);
    const item_id = e.currentTarget.getAttribute("id")
    const element_no = e.currentTarget.getAttribute("id").split("no")[1]
    const isactive = document.getElementById(item_id).classList.contains("focused_table_data")

console.log(document.getElementById(item_id).classList.contains("focused_table_data"));
    if(!isactive == false){
        console.log("isactive",!isactive);
        document.getElementById(item_id).classList.remove("focused_table_data")
    }else {
        document.getElementById(item_id).classList.add("focused_table_data")
    }
    

}

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


// document.getElementById(item_id).classList.add("focused_table_data")

// document.getElementById(item_id).style.background = "red"





// if(document.getElementById(item_id).style.background == "unset"){
//     document.getElementById(item_id).style.background = "red"
// }else{
//     document.getElementById(item_id).style.background = "unset"
   
//     console.log(document.getElementById(item_id).style.background );
// }


// document.querySelectorAll(".teeth_masks").forEach(e => {
//     e.style.opacity="0"
// });

// if( document.getElementById(`imgno_${element_no}`).style.opacity == "1" ){
//     document.getElementById(`imgno_${element_no}`).style.opacity="0"
// }else{
//     document.getElementById(`imgno_${element_no}`).style.opacity="1"
// }
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




  return (
    <div style={{height:"100%",position:"relative"}}>
    
            {/* <table className='table_body'>
             
    <tr>
        <th style={{width:"18%"}}>Tooth</th>
        <th>Findings</th>
        <th>Watch</th>
        <th>Surface</th>
        <th>Comments</th>
    </tr>
   
    <div className='vist_level'>Visit level</div>
    <tr>
        <td className='tooth_class'>12</td>
        <td >
            <div className='finding_table'>
                <div >Filling</div>
                <div className='tags_Dev'>
                    <div className="tagged_elem">AI</div>
                </div>
            </div>
        </td>
        <td className='rest_td'><AiOutlineStar/></td>
        <td className='rest_td'>.</td>
        <td style={{display:"flex",justifyContent:"space-around"}}>
            <ImCancelCircle size={20}/>
            <BiCommentAdd size={24}/>
        </td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td><AiOutlineStar/></td>
    </tr>
    <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td><AiOutlineStar/></td>
    </tr>
    <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td><AiOutlineStar/></td>
    </tr>
    <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td><AiOutlineStar/></td>
    </tr>
    <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td><AiOutlineStar/></td>
    </tr>
        </table> */}

{comment_pop&&
    <div className='comment_background'>
            <div className='comment_body'>
                <h5>Add a comment</h5>
            <Textarea/>
                <div className='lower_part_delete_t'>
                    <Button style={{width:"100%",background:"transparent",border:"grey 1px solid",color:"white"}} text={"cancel"} onclick={()=>{setcomment_pop(false)}}/>
                    <Button text={"save"} style={{width:"100%"}} onclick={()=>{setcomment_pop(false)}}/>
                </div>
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

                {table_under?.map((e,i)=>{
                    // console.log("table_under",e);
                    return(
                        <div className='table_data' id={`table_no${i}`} onClick={(e)=>{focus_mode(e)}} key={i} >
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className='tooth_class'>12</div>
                        </div>

                        <div style={{display:"flex",justifyContent:"flex-start"}}>
                            <div className='finding_table'>
                                <div >{e[0]}</div>
                                <div className='tags_Dev'>
                                    <div className="tagged_elem">{e[1]}</div>
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
                        <div className='rest_td ' >.</div>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                        
                            <BiCommentAdd size={24} className='icon_in_table' onClick={()=>{setcomment_pop(true)}} />
                        </div>

                       </div>
                    )
                })

                }


            
                    {/* <div className='table_data'>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className='tooth_class'>12</div>
                        </div>

                        <div style={{display:"flex",justifyContent:"center",marginTop:"-10px"}}>
                            <div className='finding_table'>
                                <div >Filling</div>
                                <div className='tags_Dev'>
                                    <div className="tagged_elem">AI</div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className='rest_td'>
                        { watch_on?
                            <AiOutlineStar size={21} className='icon_in_table' onClick={()=>{setwatch_on(!watch_on)}}/>:
                            <AiFillStar size={21} className='icon_in_table' color='#FFDF00' onClick={()=>{setwatch_on(!watch_on)}}/>
                            }
                            </div>
                        <div className='rest_td ' >.</div>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <ImCancelCircle size={20} color="#B33A3A " className='icon_in_table'/>
                            <BiCommentAdd size={24} className='icon_in_table' />
                        </div>

                    </div>

                    <div className='table_data'>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className='tooth_class'>12</div>
                        </div>

                        <div style={{display:"flex",justifyContent:"center",marginTop:"-10px"}}>
                            <div className='finding_table'>
                                <div >Filling</div>
                                <div className='tags_Dev'>
                                    <div className="tagged_elem">AI</div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className='rest_td'>
                        { watch_on?
                            <AiOutlineStar size={21} className='icon_in_table' onClick={()=>{setwatch_on(!watch_on)}}/>:
                            <AiFillStar size={21} className='icon_in_table' color='#FFDF00' onClick={()=>{setwatch_on(!watch_on)}}/>
                            }
                            </div>
                        <div className='rest_td ' >.</div>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <ImCancelCircle size={20} color="#B33A3A " className='icon_in_table'/>
                            <BiCommentAdd size={24} className='icon_in_table' />
                        </div>

                    </div>

                    <div className='table_data'>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className='tooth_class'>12</div>
                        </div>

                        <div style={{display:"flex",justifyContent:"center",marginTop:"-10px"}}>
                            <div className='finding_table'>
                                <div >Filling</div>
                                <div className='tags_Dev'>
                                    <div className="tagged_elem">AI</div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className='rest_td'>
                        { watch_on?
                            <AiOutlineStar size={21} className='icon_in_table' onClick={()=>{setwatch_on(!watch_on)}}/>:
                            <AiFillStar size={21} className='icon_in_table' color='#FFDF00' onClick={()=>{setwatch_on(!watch_on)}}/>
                            }
                            </div>
                        <div className='rest_td ' >.</div>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <ImCancelCircle size={20} color="#B33A3A " className='icon_in_table'/>
                            <BiCommentAdd size={24} className='icon_in_table' />
                        </div>

                    </div> */}
                    
               </div>
                
                <div className='btn_cont_table'>
                    <div className='butn_group1'>
                        <button className='curclair_btn'><RiAddFill size={19}/></button>
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