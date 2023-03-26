import React,{useState,useEffect} from 'react'
import'./home_page.css'
import { BiSearchAlt2 } from 'react-icons/bi';


function home_page() {
 const search =()=>{
     // fetch("https://dentail.onrender.com/search",{
     fetch(`${process.env.BACKEND_API}/search`,{
        method:"get",
        headers:{search_name:"sief"},   
    }).then((res)=>res.json())
    .then((data)=>console.log(data[0]))
 }


  return (
    <div>
        <div className='search_cont'>
            <input className='search_inp' type="text" />
            <button className='search_btn' onClick={()=>{search()}}><BiSearchAlt2/></button>
        </div>
    </div>
   
  )
}

export default home_page