import React, { useEffect, useState } from 'react'
import './fullscreen.css'
import Teeth from '../../img/teeth.jpg'
import { MdOutlineCancel } from 'react-icons/md';

function fullscreen(props) {

  const [tooth_arr, settooth_arr] = useState()
  useEffect(() => {
  

        
    //     const options = {
    //       method: 'POST',
    //       body: formData,
    //       // If you add this, upload won't work
    //       // headers: {
    //       //   'Content-Type': 'multipart/form-data',
    //       // }
    //     };
        
    //     fetch('http://13.234.81.186:5001/api/predict', options);
    


// fetch('http://13.234.81.186:5001/api/predict').then((res)=>{

//   console.log('responase',res);      
// })


// fetch("http://localhost:8082/json_test").then((res)=>res.json())
fetch(`${import.meta.env.VITE_BACKEND_API}/json_test`).then((res)=>res.json())
.then((data)=>{
    console.log("test_Data",data.Output);
   
    settooth_arr(Object.values(data.Output))
    console.log("asdsadasgtr",Object.keys(data.Output));

    var images = [];
    const canvas = document.getElementById('main_img');
    const ctx = canvas.getContext('2d');
    let img = new Image
    img.src = Teeth
    ctx.globalCompositeOperation = "destination-over";
    img.onload = () => {
    ctx.drawImage(img, 0, 0,300,170)
    }
    for (let i = 0; i < Object.keys(data.Output).length; i++) {
          console.log("askdskads",data.Output[i][2]);
            
          images[i] = new Image();

          images[i].src = `data:image/png;base64,${data.Output[i][3]}`;
       
          let img2= new Image
          
          
       
       
          
        


    //       images[i].onload = () => {
    //           // Draw the image onto the context
    //         //   console.log("testing imag",images[i],data.Output[i][2][0], data.Output[i][2][1], data.Output[i][2][2], data.Output[i][2][3], data.Output[i][2][4], data.Output[i][2][5]);
      
    //         ctx.drawImage(images[i],0, 0, 300, 170,)
             
             
    //         //   ctx.drawImage(img, 0, 0,300,180)
            
            
    //         //   ctx.drawImage(images[i],data.Output[i][2][5], data.Output[i][2][4], data.Output[i][2][3], data.Output[i][2][2], data.Output[i][2][1], data.Output[i][2][0])
    //         //  ctx.drawImage(images[i],400, 200, 200, 200, 0.1, 1,400,400)
                 
    //         }

    }
    // data.Output.forEach(e => {
    // console.log('dataout',e);
    // });


    // const canvas = document.getElementById('main_img');
    // const ctx = canvas.getContext('2d');
    // let img = new Image
    // let img2 = new Image
    
    
    // img.src = Teeth

    
    // img2.onload = () => {
    //     // Draw the image onto the context
    //     ctx.drawImage(img, 0, 0,300,180)
    // //     context.globalCompositeOperation = "source-in";
    //     ctx.drawImage(img2,265, 200, 286, 228, 0.8677796125411987, 1)
    // }

})




//   ctx.drawImage(img,0,0);

//   ctx.fillText('Hello world', 50, 90);



}, [])

  return (
     <div className='pop_up_background'>
            <div className='pop_up_body' style={{position:"relative",display:"flex",justifyContent:"center"}}>
            {/* <div className='img_cont' id='img_container_main'> */}
                                      <img  style={{width:"100%",height:"100%"}} src={Teeth} id='main_img' alt="" />

                                           { tooth_arr?.map((e,i)=>{
                                              return(
                                                      
                                                      <img src={`data:image/png;base64,${e[3]}`} style={{position:"absolute",width:"100%",height:"100%"}} id={`imgno_${e[4]}`} alt="" />
                                              )
                                           })  
                                            
                                              }
                              {/* </div> */}

                <div className='cancel_btn' >
                    <MdOutlineCancel size={35} onClick={()=>{props.fullscreen_off()}}/>
                </div>
            </div>


    </div>
  )
}

export default fullscreen