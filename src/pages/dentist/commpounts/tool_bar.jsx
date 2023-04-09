import React from 'react'
import { WindowMaximize } from 'tabler-icons-react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { GiStickFrame } from 'react-icons/gi';
import { RiRulerLine } from 'react-icons/ri';
import { FaRegHandPointUp } from 'react-icons/fa';
import { RulerMeasure } from 'tabler-icons-react';
import { FaTooth } from 'react-icons/fa';
import { BsBrightnessHighFill } from 'react-icons/bs';
import { RiContrastFill } from 'react-icons/ri';
import { BiZoomIn } from 'react-icons/bi';
import { FiZoomOut } from 'react-icons/fi';
import { IoInvertModeSharp } from 'react-icons/io5';
import { BsEyeSlashFill } from 'react-icons/bs';
import { ZoomInArea } from 'tabler-icons-react';
import { useState } from 'react';

function Tool_bar(props) {
    const [brigthness, setbrigthness] = useState(false)
    const [contrast, setcontrast] = useState(false)
    const [invert, setinvert] = useState(false)
    const [zoom, setzoom] = useState(1)
    const [brigtness_val, setbrigtness_val] = useState(6)
    const [contrast_val, setcontrast_val] = useState(6)


    const active_icon =(e)=>{
        e.target.classList.toggle("active_icon_bar")
      
    }


  return (
    <div className='tool_bar_class'>
            <div className='tool_bar_icon_dev'>
                <abbr title="Pop out" onClick={(e)=>{active_icon(e)}} className='tool_bar_icon'><WindowMaximize/></abbr>
            </div>

            <div className='tool_bar_icon_dev'>
                <abbr title="Full screen"  className='tool_bar_icon' onClick={(e)=>{props.fullscreen();}}><BsArrowsFullscreen/></abbr>
            </div>

            <div className='tool_bar_icon_dev'>
                <abbr title="Ruler" onClick={(e)=>{active_icon(e)}} className='tool_bar_icon'><RiRulerLine/></abbr>
            </div>

            <div className='tool_bar_icon_dev'>
                <abbr title="Edit" onClick={(e)=>{active_icon(e)}} className='tool_bar_icon'><FaRegHandPointUp/></abbr>
            </div>

            <div className='tool_bar_icon_dev'>
                <abbr title="Measurements" onClick={(e)=>{active_icon(e);props.measurement()}} className='tool_bar_icon'><RulerMeasure/></abbr>
            </div>

            <div className='tool_bar_icon_dev'>
                <abbr title="Tooth parts" onClick={(e)=>{active_icon(e)}} className='tool_bar_icon'><FaTooth/></abbr>
            </div>

            <div className='container_slider'>
                <div className='tool_bar_icon_dev'>
                    <abbr title="Brightness" onClick={(e)=>{setbrigthness(!brigthness);active_icon(e)}} className='tool_bar_icon'><BsBrightnessHighFill/></abbr>
                </div>

        {brigthness&&
                <div className='slider_postion'>
                    <div class="slider">
                        <input type="range" min="1" max="10" defaultValue={brigtness_val} id="slider1" onChange={()=>{ setbrigtness_val(document.getElementById("slider1").value);props.brightness(document.getElementById("slider1").value)}}/>
                        <p id="rangeValue">{brigtness_val}</p>
                    </div>
                </div>
                }
            </div>

        <div className='container_slider'>
            <div className='tool_bar_icon_dev'>
                <abbr title="Contrast" onClick={(e)=>{setcontrast(!contrast);active_icon(e)}} className='tool_bar_icon'><RiContrastFill/></abbr>
            </div>
            
            {contrast&&
                <div className='slider_postion'>
                    <div class="slider">
                        <input type="range" min="1" max="10" defaultValue={contrast_val} id="slider2"  onChange={()=>{setcontrast_val(document.getElementById("slider2").value);props.contrast(document.getElementById("slider2").value)}}/>
                        <p id="rangeValue2">{contrast_val}</p>
                    </div>
                </div>
                }
        </div>

            {/* <div className='tool_bar_icon_dev'>
                <abbr title="Zoom in" onClick={(e)=>{active_icon(e);props.zoom(zoom+0.5); setzoom(zoom+0.5)
                   }} className='tool_bar_icon'><BiZoomIn/></abbr>
            </div>


            <div className='tool_bar_icon_dev'>
                <abbr title="Zoom out" onClick={(e)=>{active_icon(e); active_icon(e);props.zoom(zoom-0.5); setzoom(zoom-0.5)
                }} className='tool_bar_icon'><FiZoomOut/></abbr>
            </div> */}

                    
            <div className='container_slider'>
                <div className='tool_bar_icon_dev'>
                    <abbr title="Invert" onClick={(e)=>{active_icon(e);setinvert(!invert);if(invert){
                        props.invert(0)
                    }else{
                        props.invert(1)
                    }
                }} className='tool_bar_icon'><IoInvertModeSharp/></abbr>
                </div>
                
                {/* {invert&&
                    <div className='slider_postion'>
                        <div class="slider">
                            <input type="range" min="0" max="10" defaultValue={'1'} id="slider3"  onChange={()=>{document.getElementById("rangeValue3").innerText = document.getElementById("slider3").value;props.invert(document.getElementById("slider3").value)}}/>
                            <p id="rangeValue3">0</p>
                        </div>
                    </div>
                    } */}
            </div>

           

            <div className='tool_bar_icon_dev'>
                <abbr title="Enhanced View" onClick={(e)=>{active_icon(e);props.upscale()}} className='tool_bar_icon'><BsEyeSlashFill/></abbr>
            </div>

            <div className='tool_bar_icon_dev'>
                <abbr title="Magnifying Glass" onClick={(e)=>{props.maginfy();active_icon(e)}} className='tool_bar_icon'><ZoomInArea/></abbr>
            </div>
    </div>
  )
}

export default Tool_bar