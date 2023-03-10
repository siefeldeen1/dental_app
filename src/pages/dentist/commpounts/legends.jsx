import React from 'react'

function legends() {
  return (
    <div className='legend_cont'>
    <div className='legend_div'>
            <div className='color_Square'></div>
            <div className='color_legend'>Caries</div>
    </div>

    
    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(110, 229, 255)"}}></div>
            <div className='color_legend'>Bridge</div>
    </div>

    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(53, 94, 242)"}}></div>
            <div className='color_legend'>Filling</div>
    </div>

    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(138, 128, 255)"}}></div>
            <div className='color_legend'>Root-canal filling</div>
    </div>

    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(183, 246, 58)"}}></div>
            <div className='color_legend'>Mandibular canal</div>
    </div>

    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(255, 140, 0)"}}></div>
            <div className='color_legend'>Apical lesion</div>
    </div>

    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(18, 179, 217)"}}></div>
            <div className='color_legend'>Crown</div>
    </div>

    <div className='legend_div'>
            <div className='color_Square' style={{backgroundColor:"rgb(111, 166, 255)"}}></div>
            <div className='color_legend'>Implant</div>
    </div>


</div>
  )
}

export default legends