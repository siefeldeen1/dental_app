import React, { useEffect, useState } from 'react'

import { AiOutlineStar } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import { RiAddFill } from 'react-icons/ri';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { RiArrowGoForwardLine } from 'react-icons/ri';



function table_under() {
    const [watch_on, setwatch_on] = useState(true)
    const [data_arr, setdata_arr] = useState()

    useEffect(() => {
     
        // fetch("http://localhost:8082/json_test",{
        fetch("http://localhost:8082/json_test",{
            "headers" : {
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json())
.then((data)=>{console.log("test_Data2",Object.values(data.Output));

        setdata_arr(Object.values(data.Output))
        })
    }, [])
    

  return (
    <div style={{height:"100%"}}>
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



        <div className='table_body'>
                <div className='table_header'>
                    <h3>Tooth</h3>
                    <h3>Filling</h3>
                    <h3>Watch</h3>
                    <h3>Surface</h3>
                    <h3>Comments</h3>
                </div>

                <div className='vist_level'>Visit level</div>

                <div className='table_data_organizer'>

                {data_arr?.map((e,i)=>{
                    return(
                        <div className='table_data' key={i}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className='tooth_class'>12</div>
                        </div>

                        <div style={{display:"flex",justifyContent:"flex-start",marginTop:"-10px"}}>
                            <div className='finding_table'>
                                <div >{e[0]}</div>
                                <div className='tags_Dev'>
                                    <div className="tagged_elem">{e[1]}</div>
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
                            <button className='non_border_btn'>Save</button>
                            <button className='curclair_btn2'>Analyze</button>
                            <button className='curclair_btn2'>Report</button>
                    </div>
                </div>
        </div>




    </div>
  )
}

export default table_under