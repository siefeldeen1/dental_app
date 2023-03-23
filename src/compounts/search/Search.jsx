import React from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai';


function Search({value,onchange}) {
  return (
    <div className='search_input_body'>
        <AiOutlineSearch color='white' size={20}/>
        <input value={value} onChange={onchange} type="text" className='search_input_itself'/>
    </div>
  )
}

export default Search 