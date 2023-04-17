import React,{useState,useEffect,useContext} from 'react'
import { FaPen } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';
import './dentist.css'

import Side_bar from '../sidebar/side_bar'
import Header from './commpounts/header'; 
import Table from './commpounts/table_under';
import Tool_bar from './commpounts/tool_bar';

import Xray from '../../img/Screenshot (146).png'
import Teeth from '../../img/teeth.jpg'

import Fullscreen from '../../compounts/popups/fullscreen';
import ReactImageMagnify from 'react-image-magnify';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {MainContext} from '../../../utils/MainContext'
import { IoWarningOutline } from 'react-icons/io5';
import Button from '../../compounts/button/Button.jsx'
import { useNavigate, useParams } from "react-router-dom";
// declare module 'react-measurements'
import {
        MeasurementLayer,
        calculateDistance,
        calculateArea
      } from "react-measurements";


// tf.ENV.set('WEBGL_PACK', false)

function denstist() {
 
 
       const navigate = useNavigate();
const [fullscreen_pop, setfullscreen_pop] = useState(false)        
const [magnifier, setmagnifier] = useState(1)
const [data_arr, setdata_arr] = useState()
const [tooth_arr, settooth_arr] = useState([])

const{ img_api, setimg_api} = useContext(MainContext)
const{ pop, setpop} = useContext(MainContext)
const{ saver, setsaver} = useContext(MainContext)
const{data_type_id, setdata_type_id} = useContext(MainContext)
const{ table_under, settable_under} = useContext(MainContext)
const{ tooth_numbering, settooth_numbering} = useContext(MainContext)

const [numbering, setnumbering] = useState([])

const [patient_name, setpatient_name] = useState("")
const [patient_id, setpatient_id] = useState()
const [birth, setbirth] = useState()
const [patient_img, setpatient_img] = useState()
const [upscaler, setupscaler] = useState()
const [measurements, setMeasurements] = React.useState([]);
// const {id} = useParams()
// const fileInput = document.querySelector('#your-file-input') ;
// const formData = new FormData();
// formData.append('file', fileInput.files[0]);




useEffect(() => {

        const pathname = window.location.pathname
        // console.log("pathname",pathname.split("_")[1].split(":")[1]);
        
                const patient_id = pathname.split("_")[0].split("/")[1]
                const img_no = pathname.split("_")[1].split(":")[1]
             
        
       
     
      


        //       console.log("table_under",tooth_arr);
        if(localStorage.getItem("clinic_id") == null){
                navigate("/Signup")
              }
        const fdi = [18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38]
        const palmer = [8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8]
        const uni = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17]
         const local_val = localStorage.getItem("counting")
        if(local_val == "FDI"){
                setnumbering(fdi)
                settooth_numbering(fdi)
        }else if (local_val == "Palmer"){
                setnumbering(palmer)
                settooth_numbering(palmer)
        }else if (local_val == "Universal"){
                setnumbering(uni)
                settooth_numbering(uni)
        }
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
// fetch(`${import.meta.env.VITE_BACKEND_API}/json_test`).then((res)=>res.json())
// .then((data)=>{
//         console.log("test_Data",data.Output);
//         setdata_arr(data.Output)
//         settooth_arr(Object.values(data.Output))
//         console.log("asdsadasgtr",Object.keys(data.Output));

//         var images = [];
//         const canvas = document.getElementById('main_img');
//         const ctx = canvas.getContext('2d');
//         let img = new Image
//         img.src = Teeth
//         ctx.globalCompositeOperation = "destination-over";
//         img.onload = () => {
//         ctx.drawImage(img, 0, 0,300,170)
//         }
//         for (let i = 0; i < Object.keys(data.Output).length; i++) {
//               console.log("askdskads",data.Output[i][2]);
                
//               images[i] = new Image();

//               images[i].src = `data:image/png;base64,${data.Output[i][3]}`;
           
//               let img2= new Image
              
              
           
           
              
            

   
//         //       images[i].onload = () => {
//         //           // Draw the image onto the context
//         //         //   console.log("testing imag",images[i],data.Output[i][2][0], data.Output[i][2][1], data.Output[i][2][2], data.Output[i][2][3], data.Output[i][2][4], data.Output[i][2][5]);
          
//         //         ctx.drawImage(images[i],0, 0, 300, 170,)
                 
                 
//         //         //   ctx.drawImage(img, 0, 0,300,180)
                
                
//         //         //   ctx.drawImage(images[i],data.Output[i][2][5], data.Output[i][2][4], data.Output[i][2][3], data.Output[i][2][2], data.Output[i][2][1], data.Output[i][2][0])
//         //         //  ctx.drawImage(images[i],400, 200, 200, 200, 0.1, 1,400,400)
                     
//         //         }

//         }
//         // data.Output.forEach(e => {
//         // console.log('dataout',e);
//         // });


//         // const canvas = document.getElementById('main_img');
//         // const ctx = canvas.getContext('2d');
//         // let img = new Image
//         // let img2 = new Image
        
        
//         // img.src = Teeth

        
//         // img2.onload = () => {
//         //     // Draw the image onto the context
//         //     ctx.drawImage(img, 0, 0,300,180)
//         // //     context.globalCompositeOperation = "source-in";
//         //     ctx.drawImage(img2,265, 200, 286, 228, 0.8677796125411987, 1)
//         // }

// })




//   ctx.drawImage(img,0,0);
 
//   ctx.fillText('Hello world', 50, 90);

return()=>{  fetch(`${import.meta.env.VITE_BACKEND_API}/render_imgs`,{
        method:"get",
        headers:{
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name: localStorage.getItem("clinic_name"),
          patient_id:patient_id
        }
      }).then((res)=> res.json())
      .then((data)=>{
        // console.log("img_data",data[0]);
        //  console.log("img_data",Object.values(JSON.parse(data[0].data)[img_no].Output));
        setpatient_name([data[0].name,data[0].last_name])
        setpatient_id(patient_id)
        setbirth(data[0].birth_date)
        setpatient_img(JSON.parse(data[0].imgs)[img_no])
        settooth_arr(Object.values(JSON.parse(data[0].data)[img_no].Output))
        settable_under(Object.values(JSON.parse(data[0].data)[img_no].Output))

      
                Object.values(JSON.parse(data[0].data)[img_no].Output).forEach(e => {
                     
                     
                        fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_info_first`,{
                                method: 'POST',
                                headers:{"content-type":"application/json"},
                                body:JSON.stringify({
                                name:e[0],
                                teeth_no:'12',
                                // parameter:parameters,
                                // surface:surface,
                                // stage:stage,
                                type:"ai",
                                patient_name:data[0].name,
                                patient_id:patient_id,
                                clinic_id:localStorage.getItem("clinic_id"),
                                img_no:img_no,
                                length:Object.values(JSON.parse(data[0].data)[img_no].Output).length,
                                // date:date,
                                })
                            }).then((res)=>res.json())
                            .then((data)=>{
                                // console.log(data);
                                // location.reload()
                            })
                        
                });
       
    

        // settable_under(Object.values(JSON.parse(data[0].data)[img_no].Output))
      })}

}, [])


const delete_findings = ()=>{
        const pathname = window.location.pathname
        const patient_id = pathname.split("_")[0].split("/")[1]
        const img_no = pathname.split("_")[1].split(":")[1]

        fetch(`${import.meta.env.VITE_BACKEND_API}/teeth_info`,{
                method: 'DELETE',
                headers:{
                    patient_id:patient_id,
                    clinic_id:localStorage.getItem("clinic_id"),
                    img_no:img_no,
                    tooth_id:data_type_id,
                },
            }).then((res)=>res.json())
            .then((data)=>{
                // console.log("info_Data",data);
                // settooth_arr(data)
            })
}


const numb_changer = ()=>{
        const fdi = [18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38]
        const palmer = [8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8]
        const uni = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17]
         const local_val = localStorage.getItem("counting")
         if(local_val == "FDI"){
                setnumbering(fdi)
                settooth_numbering(fdi)
        }else if (local_val == "Palmer"){
                setnumbering(palmer)
                settooth_numbering(palmer)
        }else if (local_val == "Universal"){
                setnumbering(uni)
                settooth_numbering(uni)
        }
}

const handleChange = measurements => {
        setMeasurements(measurements);
      };
    
      const measureLine = line => {
        const r = Math.round(calculateDistance(line, 100, 100)) + " mm";
        // console.log("r", r);
        return r;
      };
      const measureCircle = circle =>
      Math.round(calculateArea(circle, 100, 100)) + " mm²";
const measurement= ()=>{
        if(magnifier != 4 ){
                setmagnifier(4)
        }else{
                setmagnifier(1)
        }
}

const upscale = ()=>{
        if(magnifier != 3 ){
                setmagnifier(3)
        }else{
                setmagnifier(1)
        }

        
        fetch(`${import.meta.env.VITE_BACKEND_API}/imgqulity`,{
                method: 'POST',
                headers:{"content-type":"application/json"},
                body:JSON.stringify({
                img:`${import.meta.env.VITE_BACKEND_API}/${patient_img}`
                })
        }).then((res)=>res.json())
        .then((data)=>{
                console.log("data231",data.img);
                setupscaler(data.img)
        })

}

const activate = (e)=>{
document.querySelectorAll(".numb_buble").forEach(ele => {
    ele.classList.remove("active_bubble")
});
e.target.classList.add("active_bubble")
}

const fullscreen_on = ()=>{
       
        setfullscreen_pop(true)
}


const bightness = (e)=>{
   
        document.getElementById('main_img').style.filter=`brightness(${e/6})`
}

const contrast = (e)=>{
   
        document.getElementById('main_img').style.filter=`contrast(${e/6})`
}

const invert = (e)=>{
   
        document.getElementById('main_img').style.filter=`invert(${e})`
}

const zoom = (e)=>{
        document.getElementById('main_img').style.transform=`scale(${e})`
}

const maginfy =()=>{
        if (magnifier !=2 ){
         setmagnifier(2)
        }else {
         setmagnifier(1)
        }
        
}


  return (
    <div style={{display:"flex",overflowY:"hidden",height:"100vh"}}>  
    {fullscreen_pop&&
        <Fullscreen fullscreen_off={()=>{setfullscreen_pop(false)}}/>
    }         

    
            {pop&&
                <div className='pop_up_background' >
                    <div className='popup_Body2'>
                               <IoWarningOutline size={60}/>
                                <div>are you sure you want to remove this ?</div>
                              <div className='lower_part_delete_t'>
                                    <Button style={{width:"100%",background:"transparent",border:"grey 1px solid",color:"white"}} text={"Cancel"} onclick={()=>(setpop(false))}/>    
                                    <Button style={{width:"100%",background:"#B33A3A ",color:"white"}} onclick={()=>{saver.remove();delete_findings();setpop(false)}} text={"Delete"}/>    
                              </div>      
                    </div>
                </div>
            }
    
        <div>
                <Side_bar/>
        </div>
        
        <div style={{width:"100%",height:"100%"}}>
        <Header numb={numb_changer} patient_id={patient_id} patient_name={patient_name} birth={birth}/>
                <div style={{display:"flex",width:"100%",height:"100%"}}>
                        <div style={{width:"100%",flex:"3"}}>
                                <div className='big_contain'>
                                {/* img and teeth */}
                                <div>
                                      { magnifier == 2&&
                                      <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: '',
                                            isFluidWidth: true,
                                            src: `${import.meta.env.VITE_BACKEND_API}/${patient_img}`,
                                              
                                        },
                                        largeImage: {
                                            src: `${import.meta.env.VITE_BACKEND_API}/${patient_img}`,
                                            width: 2000,
                                            height: 1800,
                                        
                                        
                                        },className:"big_img",enlargedImageContainerDimensions:{width: '68%', height: '80%'}
                                       
                                    }} />}
                                 { magnifier == 1&&   
                                 <TransformWrapper>
                                         {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                         <div className="tools">
                                        <button onClick={() => zoomIn()}>+</button>
                                         <button onClick={() => zoomOut()}>-</button>
                                         <button onClick={() => resetTransform()}>x</button>
                                        </div>
                                         )}
                                        <TransformComponent>
                                        <>
                                        {/* <div className='img_cont' id='img_container_main'> */}
                                      
                                            
                                                {/* <canvas style={{width:"100%",height:"100%"}} id='main_img'></canvas> */}
                                                <img  style={{width:"100%",height:"100%"}} src={`${import.meta.env.VITE_BACKEND_API}/${patient_img}`} id='main_img' alt="" />
                                                {/* <div style={{position:"absolute"}}> */}
                                                     { tooth_arr?.map((e,i)=>{
                                                        return(
                                                                
                                                                <img  src={`data:image/png;base64,${e[3]}`}  style={{position:"absolute",width:"100%",height:"100%",zIndex:`999${i}`}} className="teeth_masks" id={`imgno_${i}`} alt="" />
                                                                
                                                     
                                                        )
                                                     })  
                                                      
                                                        }
                                                {/* </div> */}
                                         {/* <img style={{width:"100%",height:"100%"}} id='main_img' src={Xray} alt="" /> */}
                                        </>
                                </TransformComponent>
                                </TransformWrapper>
                                }
                                { magnifier == 3&&   
                                                <div className='img_cont' id='img_container_main'>
                                                  <img  style={{width:"100%",height:"100%"}} src={upscaler} alt="" />
                                                { tooth_arr?.map((e,i)=>{
                                                  
                                                        return(
                                                                
                                                                <img src={`data:image/png;base64,${e[3]}`} style={{position:"absolute",width:"100%",height:"100%",zIndex:`999${i}`}} id={`imgno_${i}}`} alt="" />
                                                                
                                                     
                                                        )
                                                     })  
                                                      
                                                        }
                                                </div>
                                      

                                }
                                { magnifier == 4&&   
                                <div style={{width:"100%",height:"100%",position:"relative"}}>
                                                 <div
                                        style={{
                                        // position: "absolute",
                                        // width: "770px",
                                        // height: "500px",
                                        zIndex:"9999999999",
                                        backgroundColor: "#1a1a1a",
                                        fontFamily: "sans-serif"
                                }}
                              >
                                  <div className='img_cont' id='img_container_main'>
                                      
                                            
                                      {/* <canvas style={{width:"100%",height:"100%"}} id='main_img'></canvas> */}
                                      <img  style={{width:"100%",height:"100%"}} src={`${import.meta.env.VITE_BACKEND_API}/${patient_img}`} id='main_img' alt="" />
                                      {/* <div style={{position:"absolute"}}> */}
                                           { tooth_arr?.map((e,i)=>{
                                              return(
                                                      
                                                      <img src={`data:image/png;base64,${e[3]}`} style={{position:"absolute",width:"100%",height:"100%"}} id={`imgno_${e[4]}`} alt="" />
                                                      
                                           
                                              )
                                           })  
                                            
                                              }
                                      {/* </div> */}
                               {/* <img style={{width:"100%",height:"100%"}} id='main_img' src={Xray} alt="" /> */}
                              </div>
                                <MeasurementLayer
                                  measurements={measurements}
                                  widthInPx={770}
                                  heightInPx={740}
                                  onChange={handleChange}
                                  measureLine={measureLine}
                                 measureCircle={measureCircle}
                                />
                              </div>
                                </div>
                               
                                        
                                }

                                {/* legends */}
                              
                                        

                                        {/* butns */}

                                        {/* <div className='btn_cont'>
                                                <button className='dental_btn' disabled>Caries</button>

                                                <button className='dental_btn' disabled>Apical lesion</button>

                                                <button className='dental_btn' disabled>Other detections</button>

                                                <button className='dental_btn' disabled> <BsFillEyeFill size={19}/>Hide detections</button>

                                        </div>
                                         */}
                                </div>

                                       


                                </div>
                        </div>

        <div > 
                <Tool_bar fullscreen={()=>{fullscreen_on()}} brightness={(e)=>{bightness(e)}} contrast={(e)=>{contrast(e)}} 
                        invert={(e)=>{invert(e)}} maginfy={()=>{maginfy()}} measurement={()=>{measurement()}} upscale={()=>{upscale()}}  zoom={(e)=>{zoom(e)}}
                />
        </div>

                        <div style={{}}>
                                <div>
                                        {/* teeth_Widget */}
                                        <div className='teeth_Widget'>

                                {/* first row */}

                                <div className='teeth_row'>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_8").classList.toggle("hidden_img")}}>{numbering[0]}</div>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.18825,20.6248 C12.41825,18.7878 12.53824,16.9428 12.58824,15.0918 C12.76079,13.95082 12.72489,12.78798 12.48225,11.65981 C11.51925,8.85181 10.11325,11.60581 9.61125,13.10381 C8.94897,15.2325 8.60491,17.4475 8.59024,19.6768 C8.45960946,25.0172837 8.9023987,26.4348449 8.9023987,29.0312536 C8.9023987,29.0907936 11.7091538,29.7840196 14.5296418,29.5176948 C17.0851055,29.2763949 19.3735309,28.2936034 19.3847364,28.2218914 C20.0627364,23.8828914 20.5252,19.9478 19.4402,16.1498 C19.0141,14.23024 18.022,12.48262 16.5923,11.1328 C16.5972,14.48561 16.416,17.8361 16.0493,21.1688 C15.5103,24.8298 13.4762,25.2368 13.4762,25.2368 C13.4762,25.2368 11.57625,25.5078 12.18825,20.6248 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M7.51387178,37.7138 C9.27687178,39.2058 10.2978718,38.2568 10.3978718,40.1548 C10.4978718,42.0528 10.7258618,43.1388 11.7648618,41.6468 C12.8038618,40.1548 12.5318718,38.6628 15.1089218,40.8328 C17.6859218,43.0028 19.5849218,42.7328 20.5339218,39.4768 C21.4529788,36.3235337 18.9126135,32.3319299 19.3929279,28.1469178 C19.3999185,28.086008 16.461162,29.6721896 14.1654268,29.5176948 C11.5757829,29.3434209 9.73454295,27.8913706 9.14319475,28.8237118 C9.08526544,28.9150453 5.75087178,36.2218 7.51387178,37.7138 Z"></path><svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="1.5" stroke="#FF2800" fill="#FF2800" fill-rule="nonzero" opacity="0.899834846" transform="translate(14.000000, 42.000000) scale(-1, 1) rotate(-180.000000) translate(-14.000000, -42.000000) " cx="14" cy="42" r="5"></circle></svg></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_7").classList.toggle("hidden_img")}}>{numbering[1]}</div>
                                        <div className='svg_count'> <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.18825,20.6248 C12.41825,18.7878 12.53824,16.9428 12.58824,15.0918 C12.76079,13.95082 12.72489,12.78798 12.48225,11.65981 C11.51925,8.85181 10.11325,11.60581 9.61125,13.10381 C8.94897,15.2325 8.60491,17.4475 8.59024,19.6768 C8.45960946,25.0172837 8.9023987,26.4348449 8.9023987,29.0312536 C8.9023987,29.0907936 11.7091538,29.7840196 14.5296418,29.5176948 C17.0851055,29.2763949 19.3735309,28.2936034 19.3847364,28.2218914 C20.0627364,23.8828914 20.5252,19.9478 19.4402,16.1498 C19.0141,14.23024 18.022,12.48262 16.5923,11.1328 C16.5972,14.48561 16.416,17.8361 16.0493,21.1688 C15.5103,24.8298 13.4762,25.2368 13.4762,25.2368 C13.4762,25.2368 11.57625,25.5078 12.18825,20.6248 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M7.51387178,37.7138 C9.27687178,39.2058 10.2978718,38.2568 10.3978718,40.1548 C10.4978718,42.0528 10.7258618,43.1388 11.7648618,41.6468 C12.8038618,40.1548 12.5318718,38.6628 15.1089218,40.8328 C17.6859218,43.0028 19.5849218,42.7328 20.5339218,39.4768 C21.4529788,36.3235337 18.9126135,32.3319299 19.3929279,28.1469178 C19.3999185,28.086008 16.461162,29.6721896 14.1654268,29.5176948 C11.5757829,29.3434209 9.73454295,27.8913706 9.14319475,28.8237118 C9.08526544,28.9150453 5.75087178,36.2218 7.51387178,37.7138 Z"></path></g></svg></div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_6").classList.toggle("hidden_img")}}>{numbering[2]}</div>
                                        
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.34284,6.9276 C11.34284,6.9276 10.00685,13.97959 9.46485,19.4046 C9.13857,22.6965 9.13857,26.0127 9.46485,29.3046 C9.46485,29.3046 20.9079445,34.309678 20.9434806,31.7950415 C20.9464596,31.5842374 20.9477295,29.1733289 20.9504743,28.9633442 C20.9915727,25.8192644 21.0022269,22.7754129 20.8568,20.0826 C20.5858,15.0646 20.1788,11.67358 19.3648,9.63958 C19.0325,8.66498 18.5471,7.74955 17.9269,6.9276 C17.9269,6.9276 18.7158,17.0986 17.7518,20.0826 C17.2265,21.7639 16.3245,23.3813 15.4877,24.9312 C15.4877,24.9312 12.85585,22.9306 13.26285,15.4716 C13.66985,8.01258 12.02184,3.066603 11.34284,6.9276 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M9.4648412,29.3046 C9.4648412,29.3046 7.97284,30.1186 7.97284,34.5936 C7.97284,39.0686 7.72286,43.0426 10.01786,42.3446 C12.31286,41.6466 13.26186,37.5776 15.4319,41.1036 C17.6019,44.6296 20.8568,43.0036 20.8568,37.1706 C20.8568,34.6440644 20.9076436,34.8899708 20.9432628,32.3437346 C20.9898775,29.0114882 13.5410223,26.6190757 9.4648412,29.3046 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_5").classList.toggle("hidden_img")}}>{numbering[3]}</div>
                                        
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polyline stroke="#12b3d9" stroke-width="1" points="24.9525344 36.314 24.9525344 47.0245 2.98201042 47.0245 2.98201042 36.314" fill="none"></polyline><path stroke="#000000" fill="#8a80ff" fill-rule="nonzero" d="M12.9677,3.48658 C12.9677,3.48658 13.1467,18.6966 11.7907,24.9926 C11.4281351,26.6760134 10.0891148,31.2552454 10.6123,30.5037843 C14.1487,25.4243843 18.7659423,33.5100703 18.5495621,31.4563828 C18.3922779,29.9635822 18.2144201,28.361865 18.1597,26.1356 C18.0297,20.8466 19.1647,18.5406 17.6487,15.5576 C16.1327,12.5746 14.7487,12.4386 14.1487,8.09858 C13.5487,3.75858 13.7377,1.99457943 12.9677,3.48658 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.494737,30.578544 C9.14979312,34.42633 8.93534628,38.2150702 10.16368,40.1046 C11.92668,42.8166 18.3007,43.4946 18.7077,38.3416 C18.9300806,35.5260535 19.1273594,33.577353 18.5857641,31.8024219 C18.2690541,30.7644914 15.590004,28.5522213 13.3282673,28.3705687 C11.8001305,28.2478355 10.7525604,29.8409303 10.494737,30.578544 Z"></path><svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg></g></svg>
                                        </div>
                                </div>
                                {/* <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>15</div>
                                        
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.9677,3.48658 C12.9677,3.48658 13.1467,18.6966 11.7907,24.9926 C11.4281351,26.6760134 10.0891148,31.2552454 10.6123,30.5037843 C14.1487,25.4243843 18.7659423,33.5100703 18.5495621,31.4563828 C18.3922779,29.9635822 18.2144201,28.361865 18.1597,26.1356 C18.0297,20.8466 19.1647,18.5406 17.6487,15.5576 C16.1327,12.5746 14.7487,12.4386 14.1487,8.09858 C13.5487,3.75858 13.7377,1.99457943 12.9677,3.48658 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.494737,30.578544 C9.14979312,34.42633 8.93534628,38.2150702 10.16368,40.1046 C11.92668,42.8166 18.3007,43.4946 18.7077,38.3416 C18.9300806,35.5260535 19.1273594,33.577353 18.5857641,31.8024219 C18.2690541,30.7644914 15.590004,28.5522213 13.3282673,28.3705687 C11.8001305,28.2478355 10.7525604,29.8409303 10.494737,30.578544 Z"></path></g></svg>
                                        </div>
                                </div> */}

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_4").classList.toggle("hidden_img")}}>{numbering[4]}</div>

                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.7"><polyline stroke="#12b3d9" stroke-width="1" points="24.9525344 36.314 24.9525344 47.0245 2.98201042 47.0245 2.98201042 36.314" fill="none"></polyline><path d="M9.90356023,30.8808783 C9.00139052,37.6808665 9.81068711,41.3715404 12.33145,41.9529 C17.2485,43.0869 19.2875,41.324 19.0165,36.577 C18.9363472,35.1729955 18.8278122,33.2829815 18.690895,30.906958 L9.90356023,30.8808783 Z" stroke="#000000" fill="#BABDC4" fill-rule="nonzero"></path><path d="M11.28172,7.44 L14.34729,5.4 L17.33959,7.4358 L17.33959,8.96922 L11.28172,13.11683 L11.28172,7.44 Z M11.28172,14.73119 L17.33959,10.58355 L17.33959,13.27019 L11.28172,17.41779 L11.28172,14.73119 Z M11.28172,19.03209 L17.33959,14.88449 L17.33959,17.57109 L11.28172,21.71869 L11.28172,19.03209 Z M11.28172,23.33299 L17.33959,19.18539 L17.33959,26.20132 L11.28172,26.20132 L11.28172,23.33299 Z M9.5,27.75724 L19.12129,27.75724 L19.12129,29.2237118 L9.5,29.2237118 L9.5,27.75724 Z" fill="#6fa6ff" fill-rule="nonzero"></path></svg>
                                        </div>
                                </div>
                                {/* <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>14</div>

                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.30146,2.964972 C12.30146,2.964972 12.64144,19.218 11.01444,25.999 C10.7477201,27.1106335 10.471702,28.2560721 10.2182644,29.3993538 C9.62902922,32.0574511 11.950075,28.0199699 14,28.1469178 C16.4467683,28.2984414 18.7580158,32.2508343 18.7128241,31.3554649 C18.5916722,28.9551195 18.5287134,26.5543858 18.6094,23.267 C18.7512,18.3582 18.324,13.4495 17.3365,8.63895 C16.5755,5.65595 16.1685,4.58097 16.1685,4.58097 L14.94745,10.26597 C14.94745,10.26597 14.40246,0.27397 12.30146,2.964972 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.07227,30.0718 C8.86633386,35.6968294 8.35928588,41.036806 12.33145,41.9529 C17.2485,43.0869 19.2875,41.324 19.0165,36.577 C18.8962708,34.4709932 19.1529574,32.5734225 18.690895,30.906958 C18.3056924,29.5176948 15.6130778,27.5842096 13.1434453,27.69296 C11.6071962,27.7606088 10.1822762,29.5586817 10.07227,30.0718 Z"></path></g></svg>
                                        </div>
                                </div> */}

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_3").classList.toggle("hidden_img")}}>{numbering[5]}</div>
                                        
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.10258,1.50405 C11.42979,7.64769 11.42979,13.8044 11.10258,19.948 C10.908493,23.5901743 10.6620851,26.5542614 10.4319609,28.9709463 C10.2230036,31.1653435 12.2276941,26.8841847 14,26.7380188 C15.7264836,26.5956319 17.2594412,30.7117477 16.8957746,28.3638617 C16.7493241,27.4183556 16.5980699,26.3385667 16.5306,25.237 C16.1236,18.592 15.7036,8.84805 14.42158,5.58205 C13.13958,2.31605 12.32358,0.554046 11.10258,1.50405 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.4112572,29.1873722 C9.35502754,33.0184799 9.66072453,35.9023795 9.74656,37.443 C9.88256,39.884 12.17956,42.0911 13.74656,42.9541 C14.34869,43.2068 15.005,43.3031 15.6544,43.2338 C16.3037,43.1644 16.9249,42.9319 17.4601,42.5577 C17.9953,42.1835 18.4271,41.6799 18.7152,41.0939 C19.0032,40.5078 19.1382,39.8584 19.1076,39.206 C19.1076,36.2188983 18.1192295,34.3137137 17.3478482,30.017663 C17.250606,29.4760922 16.729711,27.2180165 15.1830125,26.8184501 C13.3907911,26.3554565 10.7412293,27.9905125 10.4112572,29.1873722 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_2").classList.toggle("hidden_img")}}>{numbering[6]}</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.13947,9.09765 C11.84581,14.1296 11.84581,19.2356 11.13947,24.2676 C10.7624411,26.5786016 10.4241876,28.6158838 10.1367515,30.411972 C9.83835962,32.2765197 11.6094888,28.114843 13.4757333,28.3024332 C15.6288847,28.5188627 17.9248645,32.8449416 17.5799371,31.48732 C16.524418,27.332836 14.8736964,21.7283489 14.3265,16.4216 C13.44548,7.87762 12.22447,6.79165 11.13947,9.09765 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M9.96484,30.9250385 C9.34353136,34.8217748 9.10547,37.2744782 9.10547,39.2056 C9.10547,42.0536 9.24146,43.4466 11.68246,42.9536 C13.72905,42.6835 15.808,42.7961 17.8135,43.2856 C18.3275,43.4096 18.8705,39.6116 18.5985,37.0356 C18.4799032,35.9124186 18.2868138,34.0264071 17.5072283,30.9250385 C16.9206605,28.5915386 13.7477346,27.4498104 11.9530116,28.1738699 C10.662384,28.6945582 10.0882373,30.1511126 9.96484,30.9250385 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                                document.getElementById("imgno_1").classList.toggle("hidden_img")}}>{numbering[7]}</div>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.6188753,3.31728108 C12.6188753,3.31728108 10.9908953,13.4088301 10.1778953,21.3690228 C9.82315557,24.8423273 9.39028476,28.6427754 8.92618666,31.7504961 C8.63390214,33.7077088 11.2431822,30.2285812 13.9739153,30.1036152 C16.8444405,29.9722519 19.6994504,33.7728629 19.4887983,32.4126189 C19.266216,30.9753371 19.0274861,28.5942331 18.7468881,27.3201864 C17.6484942,22.3329629 16.2658731,18.6062756 15.8739153,15.8847783 C15.1969153,11.1840867 14.2469153,9.09608835 13.9739153,7.13804844 C13.7009153,5.18000853 13.8389153,1.98015257 12.6188753,3.31728108 Z"></path><path stroke="#000000" fill="#355ef2" fill-rule="nonzero" d="M8.91936312,31.7342041 C8.25975901,36.2805446 7.81324779,38.7873326 8.2215155,40.5833498 C8.9005155,43.5703498 10.0438953,44.1876297 13.7039153,44.1876297 C17.3639153,44.1876297 20.7303232,45.5005968 20.3233232,39.6685968 C20.1894613,37.7504574 19.7881714,34.0513088 19.2390728,30.7795837 C19.0852476,29.8630385 9.35676271,28.7194147 8.91936312,31.7342041 Z"></path><svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg></g></svg>
                                        </div>
                                </div>
                                {/* 
                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>11</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.6188753,3.31728108 C12.6188753,3.31728108 10.9908953,13.4088301 10.1778953,21.3690228 C9.82315557,24.8423273 9.39028476,28.6427754 8.92618666,31.7504961 C8.63390214,33.7077088 11.2431822,30.2285812 13.9739153,30.1036152 C16.8444405,29.9722519 19.6994504,33.7728629 19.4887983,32.4126189 C19.266216,30.9753371 19.0274861,28.5942331 18.7468881,27.3201864 C17.6484942,22.3329629 16.2658731,18.6062756 15.8739153,15.8847783 C15.1969153,11.1840867 14.2469153,9.09608835 13.9739153,7.13804844 C13.7009153,5.18000853 13.8389153,1.98015257 12.6188753,3.31728108 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M8.91936312,31.7342041 C8.25975901,36.2805446 7.81324779,38.7873326 8.2215155,40.5833498 C8.9005155,43.5703498 10.0438953,44.1876297 13.7039153,44.1876297 C17.3639153,44.1876297 20.7303232,45.5005968 20.3233232,39.6685968 C20.1894613,37.7504574 19.7881714,34.0513088 19.2390728,30.7795837 C19.0852476,29.8630385 9.35676271,28.7194147 8.91936312,31.7342041 Z"></path></g></svg>
                                        </div>
                                </div> */}

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_9").classList.toggle("hidden_img")}}>{numbering[8]}</div>
                                        
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.6188753,3.31728108 C12.6188753,3.31728108 10.9908953,13.4088301 10.1778953,21.3690228 C9.82315557,24.8423273 9.39028476,28.6427754 8.92618666,31.7504961 C8.63390214,33.7077088 11.2431822,30.2285812 13.9739153,30.1036152 C16.8444405,29.9722519 19.6994504,33.7728629 19.4887983,32.4126189 C19.266216,30.9753371 19.0274861,28.5942331 18.7468881,27.3201864 C17.6484942,22.3329629 16.2658731,18.6062756 15.8739153,15.8847783 C15.1969153,11.1840867 14.2469153,9.09608835 13.9739153,7.13804844 C13.7009153,5.18000853 13.8389153,1.98015257 12.6188753,3.31728108 Z"></path><path stroke="#000000" fill="#355ef2" fill-rule="nonzero" d="M8.91936312,31.7342041 C8.25975901,36.2805446 7.81324779,38.7873326 8.2215155,40.5833498 C8.9005155,43.5703498 10.0438953,44.1876297 13.7039153,44.1876297 C17.3639153,44.1876297 20.7303232,45.5005968 20.3233232,39.6685968 C20.1894613,37.7504574 19.7881714,34.0513088 19.2390728,30.7795837 C19.0852476,29.8630385 9.35676271,28.7194147 8.91936312,31.7342041 Z"></path><svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg></g></svg>
                                        </div>
                                </div>
                                {/* <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>21</div>
                                        
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.6188753,3.31728108 C12.6188753,3.31728108 10.9908953,13.4088301 10.1778953,21.3690228 C9.82315557,24.8423273 9.39028476,28.6427754 8.92618666,31.7504961 C8.63390214,33.7077088 11.2431822,30.2285812 13.9739153,30.1036152 C16.8444405,29.9722519 19.6994504,33.7728629 19.4887983,32.4126189 C19.266216,30.9753371 19.0274861,28.5942331 18.7468881,27.3201864 C17.6484942,22.3329629 16.2658731,18.6062756 15.8739153,15.8847783 C15.1969153,11.1840867 14.2469153,9.09608835 13.9739153,7.13804844 C13.7009153,5.18000853 13.8389153,1.98015257 12.6188753,3.31728108 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M8.91936312,31.7342041 C8.25975901,36.2805446 7.81324779,38.7873326 8.2215155,40.5833498 C8.9005155,43.5703498 10.0438953,44.1876297 13.7039153,44.1876297 C17.3639153,44.1876297 20.7303232,45.5005968 20.3233232,39.6685968 C20.1894613,37.7504574 19.7881714,34.0513088 19.2390728,30.7795837 C19.0852476,29.8630385 9.35676271,28.7194147 8.91936312,31.7342041 Z"></path></g></svg>
                                        </div>
                                </div> */}

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_10").classList.toggle("hidden_img")}}>{numbering[9]}</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.13947,9.09765 C11.84581,14.1296 11.84581,19.2356 11.13947,24.2676 C10.7624411,26.5786016 10.4241876,28.6158838 10.1367515,30.411972 C9.83835962,32.2765197 11.6094888,28.114843 13.4757333,28.3024332 C15.6288847,28.5188627 17.9248645,32.8449416 17.5799371,31.48732 C16.524418,27.332836 14.8736964,21.7283489 14.3265,16.4216 C13.44548,7.87762 12.22447,6.79165 11.13947,9.09765 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M9.96484,30.9250385 C9.34353136,34.8217748 9.10547,37.2744782 9.10547,39.2056 C9.10547,42.0536 9.24146,43.4466 11.68246,42.9536 C13.72905,42.6835 15.808,42.7961 17.8135,43.2856 C18.3275,43.4096 18.8705,39.6116 18.5985,37.0356 C18.4799032,35.9124186 18.2868138,34.0264071 17.5072283,30.9250385 C16.9206605,28.5915386 13.7477346,27.4498104 11.9530116,28.1738699 C10.662384,28.6945582 10.0882373,30.1511126 9.96484,30.9250385 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_11").classList.toggle("hidden_img")}}>{numbering[10]}</div>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polyline stroke="#12b3d9" stroke-width="1" points="24.9525344 36.314 24.9525344 47.0245 2.98201042 47.0245 2.98201042 36.314" fill="none"></polyline><path stroke="#000000" fill="#8a80ff" fill-rule="nonzero" d="M12.9677,3.48658 C12.9677,3.48658 13.1467,18.6966 11.7907,24.9926 C11.4281351,26.6760134 10.0891148,31.2552454 10.6123,30.5037843 C14.1487,25.4243843 18.7659423,33.5100703 18.5495621,31.4563828 C18.3922779,29.9635822 18.2144201,28.361865 18.1597,26.1356 C18.0297,20.8466 19.1647,18.5406 17.6487,15.5576 C16.1327,12.5746 14.7487,12.4386 14.1487,8.09858 C13.5487,3.75858 13.7377,1.99457943 12.9677,3.48658 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.494737,30.578544 C9.14979312,34.42633 8.93534628,38.2150702 10.16368,40.1046 C11.92668,42.8166 18.3007,43.4946 18.7077,38.3416 C18.9300806,35.5260535 19.1273594,33.577353 18.5857641,31.8024219 C18.2690541,30.7644914 15.590004,28.5522213 13.3282673,28.3705687 C11.8001305,28.2478355 10.7525604,29.8409303 10.494737,30.578544 Z"></path><svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg></g></svg>
                                        </div>
                                </div>
                                {/* <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>23</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.10258,1.50405 C11.42979,7.64769 11.42979,13.8044 11.10258,19.948 C10.908493,23.5901743 10.6620851,26.5542614 10.4319609,28.9709463 C10.2230036,31.1653435 12.2276941,26.8841847 14,26.7380188 C15.7264836,26.5956319 17.2594412,30.7117477 16.8957746,28.3638617 C16.7493241,27.4183556 16.5980699,26.3385667 16.5306,25.237 C16.1236,18.592 15.7036,8.84805 14.42158,5.58205 C13.13958,2.31605 12.32358,0.554046 11.10258,1.50405 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.4112572,29.1873722 C9.35502754,33.0184799 9.66072453,35.9023795 9.74656,37.443 C9.88256,39.884 12.17956,42.0911 13.74656,42.9541 C14.34869,43.2068 15.005,43.3031 15.6544,43.2338 C16.3037,43.1644 16.9249,42.9319 17.4601,42.5577 C17.9953,42.1835 18.4271,41.6799 18.7152,41.0939 C19.0032,40.5078 19.1382,39.8584 19.1076,39.206 C19.1076,36.2188983 18.1192295,34.3137137 17.3478482,30.017663 C17.250606,29.4760922 16.729711,27.2180165 15.1830125,26.8184501 C13.3907911,26.3554565 10.7412293,27.9905125 10.4112572,29.1873722 Z"></path></g></svg>
                                        </div>
                                </div> */}

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_12").classList.toggle("hidden_img")}}>{numbering[11]}</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.30146,2.964972 C12.30146,2.964972 12.64144,19.218 11.01444,25.999 C10.7477201,27.1106335 10.471702,28.2560721 10.2182644,29.3993538 C9.62902922,32.0574511 11.950075,28.0199699 14,28.1469178 C16.4467683,28.2984414 18.7580158,32.2508343 18.7128241,31.3554649 C18.5916722,28.9551195 18.5287134,26.5543858 18.6094,23.267 C18.7512,18.3582 18.324,13.4495 17.3365,8.63895 C16.5755,5.65595 16.1685,4.58097 16.1685,4.58097 L14.94745,10.26597 C14.94745,10.26597 14.40246,0.27397 12.30146,2.964972 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.07227,30.0718 C8.86633386,35.6968294 8.35928588,41.036806 12.33145,41.9529 C17.2485,43.0869 19.2875,41.324 19.0165,36.577 C18.8962708,34.4709932 19.1529574,32.5734225 18.690895,30.906958 C18.3056924,29.5176948 15.6130778,27.5842096 13.1434453,27.69296 C11.6071962,27.7606088 10.1822762,29.5586817 10.07227,30.0718 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_13").classList.toggle("hidden_img")}}>{numbering[12]}</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.9677,3.48658 C12.9677,3.48658 13.1467,18.6966 11.7907,24.9926 C11.4281351,26.6760134 10.0891148,31.2552454 10.6123,30.5037843 C14.1487,25.4243843 18.7659423,33.5100703 18.5495621,31.4563828 C18.3922779,29.9635822 18.2144201,28.361865 18.1597,26.1356 C18.0297,20.8466 19.1647,18.5406 17.6487,15.5576 C16.1327,12.5746 14.7487,12.4386 14.1487,8.09858 C13.5487,3.75858 13.7377,1.99457943 12.9677,3.48658 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.494737,30.578544 C9.14979312,34.42633 8.93534628,38.2150702 10.16368,40.1046 C11.92668,42.8166 18.3007,43.4946 18.7077,38.3416 C18.9300806,35.5260535 19.1273594,33.577353 18.5857641,31.8024219 C18.2690541,30.7644914 15.590004,28.5522213 13.3282673,28.3705687 C11.8001305,28.2478355 10.7525604,29.8409303 10.494737,30.578544 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_14").classList.toggle("hidden_img")}}>{numbering[13]}</div>
                                        
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.34284,6.9276 C11.34284,6.9276 10.00685,13.97959 9.46485,19.4046 C9.13857,22.6965 9.13857,26.0127 9.46485,29.3046 C9.46485,29.3046 20.9079445,34.309678 20.9434806,31.7950415 C20.9464596,31.5842374 20.9477295,29.1733289 20.9504743,28.9633442 C20.9915727,25.8192644 21.0022269,22.7754129 20.8568,20.0826 C20.5858,15.0646 20.1788,11.67358 19.3648,9.63958 C19.0325,8.66498 18.5471,7.74955 17.9269,6.9276 C17.9269,6.9276 18.7158,17.0986 17.7518,20.0826 C17.2265,21.7639 16.3245,23.3813 15.4877,24.9312 C15.4877,24.9312 12.85585,22.9306 13.26285,15.4716 C13.66985,8.01258 12.02184,3.066603 11.34284,6.9276 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M9.4648412,29.3046 C9.4648412,29.3046 7.97284,30.1186 7.97284,34.5936 C7.97284,39.0686 7.72286,43.0426 10.01786,42.3446 C12.31286,41.6466 13.26186,37.5776 15.4319,41.1036 C17.6019,44.6296 20.8568,43.0036 20.8568,37.1706 C20.8568,34.6440644 20.9076436,34.8899708 20.9432628,32.3437346 C20.9898775,29.0114882 13.5410223,26.6190757 9.4648412,29.3046 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_15").classList.toggle("hidden_img")}}>{numbering[14]}</div>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M12.18825,20.6248 C12.41825,18.7878 12.53824,16.9428 12.58824,15.0918 C12.76079,13.95082 12.72489,12.78798 12.48225,11.65981 C11.51925,8.85181 10.11325,11.60581 9.61125,13.10381 C8.94897,15.2325 8.60491,17.4475 8.59024,19.6768 C8.45960946,25.0172837 8.9023987,26.4348449 8.9023987,29.0312536 C8.9023987,29.0907936 11.7091538,29.7840196 14.5296418,29.5176948 C17.0851055,29.2763949 19.3735309,28.2936034 19.3847364,28.2218914 C20.0627364,23.8828914 20.5252,19.9478 19.4402,16.1498 C19.0141,14.23024 18.022,12.48262 16.5923,11.1328 C16.5972,14.48561 16.416,17.8361 16.0493,21.1688 C15.5103,24.8298 13.4762,25.2368 13.4762,25.2368 C13.4762,25.2368 11.57625,25.5078 12.18825,20.6248 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M7.51387178,37.7138 C9.27687178,39.2058 10.2978718,38.2568 10.3978718,40.1548 C10.4978718,42.0528 10.7258618,43.1388 11.7648618,41.6468 C12.8038618,40.1548 12.5318718,38.6628 15.1089218,40.8328 C17.6859218,43.0028 19.5849218,42.7328 20.5339218,39.4768 C21.4529788,36.3235337 18.9126135,32.3319299 19.3929279,28.1469178 C19.3999185,28.086008 16.461162,29.6721896 14.1654268,29.5176948 C11.5757829,29.3434209 9.73454295,27.8913706 9.14319475,28.8237118 C9.08526544,28.9150453 5.75087178,36.2218 7.51387178,37.7138 Z"></path></g></svg>
                                        </div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_16").classList.toggle("hidden_img")}}>{numbering[15]}</div>
                                        
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.70849,11.02783 C10.70849,11.02783 7.99549,17.2668 8.53849,21.3348 C8.91297283,24.1403178 9.15889147,26.1296763 9.34433816,26.6401915 C9.38395654,26.7492567 11.4373521,28.0975553 13.5903582,28.1452064 C15.9723785,28.1979262 18.25777,26.6533019 18.3062949,26.4892253 C18.6495991,25.3284139 19.9867847,19.9296688 19.9605,17.6648 C19.819,15.4876 19.0385,13.40052 17.7165,11.66483 C16.4825,14.7648 17.0045,18.5098 15.4545,21.6098 C14.0985,24.3218 12.47049,25.4098 12.33549,21.0668 C12.10228,17.6777 11.55765,14.3172 10.70849,11.02783 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M9.34433816,26.6401915 C8.30057979,28.4896312 7.44013285,30.4371027 6.77549,32.4548 C6.09749,35.0318 10.30149,35.8448 10.70849,37.2018 C11.11549,38.5588 12.20049,35.5748 13.69249,37.2018 C15.1845,38.8288 18.9815,40.6438 19.6595,37.5668 C20.3375,34.4898 19.6595,31.5059 19.6595,30.5569 C19.4011403,29.1897002 18.8143946,27.8078145 18.3062949,26.4947162 C18.264523,26.3867638 16.3086887,27.9062282 14.11719,27.9175741 C12.0128008,27.928469 9.4243144,26.4984813 9.34433816,26.6401915 Z"></path></g></svg>
                                        </div>
                                </div>

                                </div>


                                {/* gums_sim */}
                                <div className='fake_gums_cont'>
                                        <div className='fake_gums'></div>
                                        <div className='fake_gums'></div>
                                        <div className='teeth_gums_btns '>
                                                <button className='curclair_btn3'><BiChevronLeft size={20}/></button>
                                                <button className='curclair_btn3'><BiChevronRight size={20}/></button>
                                        </div>
                                        <div className='fake_gums'></div>
                                        <div className='fake_gums'></div>
                                </div>


                                {/* second row teeth */}

                                <div className='teeth_row'>
                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M8.12467504,20.7215379 C8.03551504,23.9674379 8.31598504,27.2130379 8.96066504,30.3955379 C10.045665,36.0955379 12.305715,38.7135379 12.305715,38.7135379 C12.305715,38.7135379 12.666715,30.4855379 12.848715,28.3135379 C13.030715,26.1415379 14.837715,26.4135379 15.018715,28.9465379 C15.106715,32.2078379 14.955615,35.4712379 14.566615,38.7105379 C14.295615,40.7005379 14.205615,41.4235379 14.205615,41.4235379 C15.578015,40.4001379 16.732615,39.1135379 17.601915,37.6387379 C18.471215,36.1640379 19.037915,34.5307379 19.268715,32.8345379 C19.991715,27.1345379 19.177615,22.0745379 19.720615,19.9045379 C19.979263,18.8708989 18.258053,20.8731243 15.3844693,21.0776379 C12.2253117,21.3024758 7.8825097,19.82486 8.12467504,20.7215379 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M8.95966504,9.87149785 C8.95966504,9.87149785 6.97066504,11.3185179 7.33266504,15.4775379 C7.39008605,17.0714768 7.60989807,17.9940637 7.98992637,19.4090948 C8.03247521,19.567525 7.98952582,21.1417634 9.98410665,21.151744 C11.5519238,21.1595891 15.0753576,21.9428341 16.499515,21.6711444 C18.8655146,21.2197774 19.4912784,20.8210397 19.720615,19.9045379 C20.263615,17.7345379 20.353715,12.4905379 18.906715,10.5925079 C18.292715,9.84224785 17.445315,9.31898785 16.499515,9.10605785 C15.553715,8.89311785 14.563915,9.00276785 13.687615,9.41751785 C12.396615,10.0505179 12.126615,10.4115079 11.131655,9.95950785 C10.435895,9.69766785 9.67432504,9.66680785 8.95966504,9.87149785 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);;
                                            document.getElementById("imgno_17").classList.toggle("hidden_img")}}>{numbering[16]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M6.91569988,17.7408387 C8.09169988,19.8198387 9.26671988,21.4928387 8.99571988,24.2278387 C8.72471988,26.9628387 7.36768988,33.3828387 8.36268988,36.5468387 C8.56133988,37.3930387 8.95001988,38.1828387 9.49925988,38.8565387 C10.0484899,39.5301387 10.7438799,40.0699387 11.5326999,40.4348387 C11.5326999,40.4348387 10.4526999,35.3398387 11.5326999,33.5938387 C12.3760999,32.4242387 12.8469999,31.0273387 12.8836999,29.5858387 C12.9736999,28.1388387 12.9736999,26.5118387 12.9736999,26.5118387 C12.9736999,26.5118387 15.5966999,27.2348387 15.5056999,31.3948387 C15.4146999,35.5548387 14.6916999,42.5158387 14.6916999,42.5158387 C14.6916999,42.5158387 18.8506999,38.8988387 19.4836999,34.7398387 C20.1166999,30.5808387 19.8446999,20.4538387 20.5686999,19.2788387 C21.0499743,18.384045 17.3424302,20.5672792 13.7526985,20.2174393 C10.0999309,19.8614562 6.56257292,16.9866814 6.91569988,17.7408387 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M16.8606999,8.78886868 C15.2290999,9.20469868 13.5192999,9.20469868 11.8876999,8.78886868 C8.63271988,8.15586868 6.82469988,10.0548687 6.37269988,12.9478387 C6.02479988,14.5619387 6.21553988,16.2455387 6.91569988,17.7408387 C7.49019228,18.7564592 10.2185909,20.299087 13.3225309,20.5825851 C16.5724321,20.8794146 20.198384,19.8798348 20.5686999,19.2788387 C21.5396999,17.4735387 22.0374999,15.4516387 22.0156999,13.4018387 C22.0156999,10.9608387 22.1966999,7.70186868 20.3886999,8.02186868 C18.5806999,8.34186868 16.8606999,8.78886868 16.8606999,8.78886868 Z"></path></g></svg>
                                        </div> 

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_18").classList.toggle("hidden_img")}}>{numbering[17]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.2304895,21.9283527 C10.2304895,21.9283527 8.89449949,28.9803427 8.35249949,34.4053527 C8.02621949,37.6972527 8.02621949,41.0134527 8.35249949,44.3053527 C8.35249949,44.3053527 11.9404766,42.9738251 15.0859671,43.5007527 C17.5941975,43.9209275 19.8030561,46.3838136 19.8180678,45.3802231 C19.8725473,41.7380553 19.9116196,38.1787763 19.7444495,35.0833527 C19.4734495,30.0653527 19.0664495,26.6743327 18.2524495,24.6403327 C17.9201495,23.6657327 17.4347495,22.7503027 16.8145495,21.9283527 C16.8145495,21.9283527 17.6034495,32.0993527 16.6394495,35.0833527 C16.1141495,36.7646527 15.2121495,38.3820527 14.3753495,39.9319527 C14.3753495,39.9319527 11.7434995,37.9313527 12.1504995,30.4723527 C12.5574995,23.0133327 10.9094895,18.0673557 10.2304895,21.9283527 Z" transform="translate(13.986342, 32.100961) rotate(-180.000000) translate(-13.986342, -32.100961) "></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M7.87246342,15.187333 C7.87246342,19.662333 7.62248342,23.636333 9.91748342,22.938333 C12.2124834,22.240333 13.1614834,18.171333 15.3315234,21.697333 C17.5015234,25.223333 20.7564234,23.597333 20.7564234,17.764333 C20.7564234,15.8093488 20.7868653,13.8089825 20.8171405,11.8243387 C20.8579288,9.15051706 13.3337365,8.03085967 9.48880282,9.99373299 C7.67257773,10.9209323 7.87246342,13.7516539 7.87246342,15.187333 Z" transform="translate(14.340885, 15.273492) rotate(-180.000000) translate(-14.340885, -15.273492) "></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_19").classList.toggle("hidden_img")}}>{numbering[18]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.4663,19.742225 C11.8233,22.726225 12.45528,27.698225 12.81728,32.942225 C13.02139,36.827225 13.02139,40.720225 12.81728,44.605225 C12.81728,44.605225 17.4883,39.450225 17.6683,36.195225 C17.8913,32.173225 17.8093,33.259225 18.1513,20.103225 C18.4382431,19.3410039 16.1590048,22.6937 14.0874,22.3938475 C11.8207678,22.0657659 9.75729773,18.1831514 10.4663,19.742225 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M13.7203,9.34426496 C13.7203,9.34426496 10.7363,10.700245 9.7423,11.966225 C8.7483,13.232225 9.1093,16.758225 10.4663,19.742225 C11.8233,22.726225 15.0415009,23.646725 18.1513,20.103225 C18.7522,18.507025 19.1177,16.831725 19.2363,15.130225 C19.3273,12.689225 18.7843,12.146225 17.0663,10.158255 C15.3483,8.17025496 13.7203,9.34426496 13.7203,9.34426496 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                            document.getElementById("imgno_20").classList.toggle("hidden_img")}}>{numbering[19]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.687435,23.0333069 C10.7530882,23.5222385 11.0119031,24.7365569 11.04924,25.22894 C11.42855,29.32464 12.01698,33.39834 12.81224,37.43394 C13.56074,41.10784 14.1039,44.82064 14.43923,48.55494 C15.89238,45.50064 16.67849,42.17174 16.74519,38.78994 C16.74519,31.2071321 16.74519,25.6471321 16.74519,22.10994 C16.74519,21.9751454 14.8858508,23.8489005 13.3233682,23.992779 C11.9391338,24.1202438 10.6177827,22.5145932 10.687435,23.0333069 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.23525,13.15904 C9.29025,15.05804 9.55725,18.04104 10.23525,20.48204 C10.3773052,21.0076366 10.2529857,23.1055319 11.15869,23.96334 C12.0941486,24.8493289 14.0748712,24.4818809 15.15869,24.1348291 C15.654707,23.9759985 16.1835404,23.3010355 16.74519,22.10994 C17.47419,21.15734 17.98549,20.05644 18.24329,18.88494 C18.50099,17.71344 18.49899,16.49964 18.23719,15.32894 C17.76099,12.83504 16.41329,10.59175 14.43523,9 C14.43523,9 11.18025,11.25999 10.23525,13.15904 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                          document.getElementById("imgno_21").classList.toggle("hidden_img")}}>{numbering[20]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M17.6843918,17.6345147 C17.4705095,23.7965645 17.0470229,33.8683384 16.3832,37.5547 C15.2842,43.6577 12.98328,46.7767 12.98328,46.7767 C12.26125,42.014 11.80851,37.2144 11.62726,32.4007 C11.4774469,28.5774886 11.1430384,24.7642836 10.6253206,20.9743394 C10.5683375,20.5571959 12.568177,23.9276744 14.4238916,23.2822471 C16.1432446,22.6842471 17.7518243,15.6917521 17.6843918,17.6345147 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.44797,10.08843 C11.8998,9.94571 12.38102,9.92306 12.84427,10.02269 C14.33627,10.42969 14.20026,11.07669 15.6923,9.93969 C17.1843,8.80269 17.8622,8.9397 17.8622,11.5147 C17.8622,12.6127959 17.7783,14.5146406 17.6138,18.9710252 C17.5873546,19.6874454 17.4742262,20.3091276 17.2945422,20.8416459 C15.9709591,24.7642677 11.0360378,23.8488118 10.5345419,20.3232368 C10.4511715,19.7371329 10.3634126,19.1516042 10.27127,18.5667 C9.98904,15.9978 9.9877,13.4058 10.26727,10.83669 C10.58924,10.48903 10.99613,10.23115 11.44797,10.08843 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                          document.getElementById("imgno_22").classList.toggle("hidden_img")}}>{numbering[21]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.9767773,21.3498006 C11.2034532,22.5726428 11.4193405,23.9373927 11.54475,25.6429 C11.95175,31.1779 13.57881,43.9299 13.57881,43.9299 C13.57881,43.9299 16.1558,33.5299 16.4268,28.6299 C16.6473597,24.6419209 15.9221392,22.6102548 16.4268,21.0073186 C16.4841632,20.825118 14.4950004,22.9472426 13.0282707,22.658649 C11.5440068,22.3666055 10.7207796,19.9687776 10.9767773,21.3498006 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M14.79976,8.26092 C14.79976,8.26092 10.5998,7.85393 10.1888,13.0079 C9.91036876,16.4994684 10.4446905,18.5187696 10.9448897,21.1790283 C11.0702584,21.8457889 12.0461623,22.9912428 13.4302716,23.0000517 C14.6755074,23.0078786 15.6277485,22.1130911 16.1235478,21.6021275 C16.3081513,21.4118777 17.1322376,19.9034265 17.288876,19.4590275 C18.101876,17.1524648 18.5968,15.0449 17.9178,11.51891 C17.2388,7.99291 15.3408,8.25692 15.3408,8.25692 L14.79976,8.26092 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                          document.getElementById("imgno_23").classList.toggle("hidden_img")}}>{numbering[22]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.4548823,20.4835378 C11.6159301,20.9682593 11.7759406,21.4933685 11.92177,22.1381 C12.55577,24.9411 12.64573,34.614 13.18873,38.231 C13.44054,40.225 14.05318,42.1565 14.99672,43.9311 C15.66049,40.8351 16.0838,37.6924 16.2628,34.5311 C16.3725,30.5271 16.7958,26.5379 17.5288,22.6001 C17.7245289,21.751581 17.990667,20.8682407 18.2169285,19.8735516 C18.414457,19.0051784 16.3630269,21.63041 14.58368,21.7846626 C12.7468033,21.9439024 11.1810365,19.6593169 11.4548823,20.4835378 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M13.55073,8.24707 C13.55073,8.24707 10.20573,9.20907 10.29573,14.0011 C10.3638689,17.6291155 10.8974674,18.8210396 11.4278062,20.4024331 C11.5156463,20.6643595 12.7781663,22.2134064 14.4830577,22.1079504 C16.0806105,22.0091337 18.1261118,20.2810126 18.2376534,19.7816143 C18.6276993,18.0352845 18.8862294,15.9433183 18.4287,13.1001 C18.2748,11.86242 17.7108,10.71199 16.8266,9.83237 C15.94246,8.95275 14.78915,8.39463 13.55073,8.24707 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e);
                                          document.getElementById("imgno_24").classList.toggle("hidden_img")}}>{numbering[23]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.4548823,20.4835378 C11.6159301,20.9682593 11.7759406,21.4933685 11.92177,22.1381 C12.55577,24.9411 12.64573,34.614 13.18873,38.231 C13.44054,40.225 14.05318,42.1565 14.99672,43.9311 C15.66049,40.8351 16.0838,37.6924 16.2628,34.5311 C16.3725,30.5271 16.7958,26.5379 17.5288,22.6001 C17.7245289,21.751581 17.990667,20.8682407 18.2169285,19.8735516 C18.414457,19.0051784 16.3630269,21.63041 14.58368,21.7846626 C12.7468033,21.9439024 11.1810365,19.6593169 11.4548823,20.4835378 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M13.55073,8.24707 C13.55073,8.24707 10.20573,9.20907 10.29573,14.0011 C10.3638689,17.6291155 10.8974674,18.8210396 11.4278062,20.4024331 C11.5156463,20.6643595 12.7781663,22.2134064 14.4830577,22.1079504 C16.0806105,22.0091337 18.1261118,20.2810126 18.2376534,19.7816143 C18.6276993,18.0352845 18.8862294,15.9433183 18.4287,13.1001 C18.2748,11.86242 17.7108,10.71199 16.8266,9.83237 C15.94246,8.95275 14.78915,8.39463 13.55073,8.24707 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[24]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.9767773,21.3498006 C11.2034532,22.5726428 11.4193405,23.9373927 11.54475,25.6429 C11.95175,31.1779 13.57881,43.9299 13.57881,43.9299 C13.57881,43.9299 16.1558,33.5299 16.4268,28.6299 C16.6473597,24.6419209 15.9221392,22.6102548 16.4268,21.0073186 C16.4841632,20.825118 14.4950004,22.9472426 13.0282707,22.658649 C11.5440068,22.3666055 10.7207796,19.9687776 10.9767773,21.3498006 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M14.79976,8.26092 C14.79976,8.26092 10.5998,7.85393 10.1888,13.0079 C9.91036876,16.4994684 10.4446905,18.5187696 10.9448897,21.1790283 C11.0702584,21.8457889 12.0461623,22.9912428 13.4302716,23.0000517 C14.6755074,23.0078786 15.6277485,22.1130911 16.1235478,21.6021275 C16.3081513,21.4118777 17.1322376,19.9034265 17.288876,19.4590275 C18.101876,17.1524648 18.5968,15.0449 17.9178,11.51891 C17.2388,7.99291 15.3408,8.25692 15.3408,8.25692 L14.79976,8.26092 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[25]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M17.6843918,17.6345147 C17.4705095,23.7965645 17.0470229,33.8683384 16.3832,37.5547 C15.2842,43.6577 12.98328,46.7767 12.98328,46.7767 C12.26125,42.014 11.80851,37.2144 11.62726,32.4007 C11.4774469,28.5774886 11.1430384,24.7642836 10.6253206,20.9743394 C10.5683375,20.5571959 12.568177,23.9276744 14.4238916,23.2822471 C16.1432446,22.6842471 17.7518243,15.6917521 17.6843918,17.6345147 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M11.44797,10.08843 C11.8998,9.94571 12.38102,9.92306 12.84427,10.02269 C14.33627,10.42969 14.20026,11.07669 15.6923,9.93969 C17.1843,8.80269 17.8622,8.9397 17.8622,11.5147 C17.8622,12.6127959 17.7783,14.5146406 17.6138,18.9710252 C17.5873546,19.6874454 17.4742262,20.3091276 17.2945422,20.8416459 C15.9709591,24.7642677 11.0360378,23.8488118 10.5345419,20.3232368 C10.4511715,19.7371329 10.3634126,19.1516042 10.27127,18.5667 C9.98904,15.9978 9.9877,13.4058 10.26727,10.83669 C10.58924,10.48903 10.99613,10.23115 11.44797,10.08843 Z"></path></g></svg>  
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[26]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.687435,23.0333069 C10.7530882,23.5222385 11.0119031,24.7365569 11.04924,25.22894 C11.42855,29.32464 12.01698,33.39834 12.81224,37.43394 C13.56074,41.10784 14.1039,44.82064 14.43923,48.55494 C15.89238,45.50064 16.67849,42.17174 16.74519,38.78994 C16.74519,31.2071321 16.74519,25.6471321 16.74519,22.10994 C16.74519,21.9751454 14.8858508,23.8489005 13.3233682,23.992779 C11.9391338,24.1202438 10.6177827,22.5145932 10.687435,23.0333069 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.23525,13.15904 C9.29025,15.05804 9.55725,18.04104 10.23525,20.48204 C10.3773052,21.0076366 10.2529857,23.1055319 11.15869,23.96334 C12.0941486,24.8493289 14.0748712,24.4818809 15.15869,24.1348291 C15.654707,23.9759985 16.1835404,23.3010355 16.74519,22.10994 C17.47419,21.15734 17.98549,20.05644 18.24329,18.88494 C18.50099,17.71344 18.49899,16.49964 18.23719,15.32894 C17.76099,12.83504 16.41329,10.59175 14.43523,9 C14.43523,9 11.18025,11.25999 10.23525,13.15904 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[27]}</div>
                                </div>


                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.4663,19.742225 C11.8233,22.726225 12.45528,27.698225 12.81728,32.942225 C13.02139,36.827225 13.02139,40.720225 12.81728,44.605225 C12.81728,44.605225 17.4883,39.450225 17.6683,36.195225 C17.8913,32.173225 17.8093,33.259225 18.1513,20.103225 C18.4382431,19.3410039 16.1590048,22.6937 14.0874,22.3938475 C11.8207678,22.0657659 9.75729773,18.1831514 10.4663,19.742225 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M13.7203,9.34426496 C13.7203,9.34426496 10.7363,10.700245 9.7423,11.966225 C8.7483,13.232225 9.1093,16.758225 10.4663,19.742225 C11.8233,22.726225 15.0415009,23.646725 18.1513,20.103225 C18.7522,18.507025 19.1177,16.831725 19.2363,15.130225 C19.3273,12.689225 18.7843,12.146225 17.0663,10.158255 C15.3483,8.17025496 13.7203,9.34426496 13.7203,9.34426496 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[28]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                                <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M10.2304895,21.9283527 C10.2304895,21.9283527 8.89449949,28.9803427 8.35249949,34.4053527 C8.02621949,37.6972527 8.02621949,41.0134527 8.35249949,44.3053527 C8.35249949,44.3053527 11.9404766,42.9738251 15.0859671,43.5007527 C17.5941975,43.9209275 19.8030561,46.3838136 19.8180678,45.3802231 C19.8725473,41.7380553 19.9116196,38.1787763 19.7444495,35.0833527 C19.4734495,30.0653527 19.0664495,26.6743327 18.2524495,24.6403327 C17.9201495,23.6657327 17.4347495,22.7503027 16.8145495,21.9283527 C16.8145495,21.9283527 17.6034495,32.0993527 16.6394495,35.0833527 C16.1141495,36.7646527 15.2121495,38.3820527 14.3753495,39.9319527 C14.3753495,39.9319527 11.7434995,37.9313527 12.1504995,30.4723527 C12.5574995,23.0133327 10.9094895,18.0673557 10.2304895,21.9283527 Z" transform="translate(13.986342, 32.100961) rotate(-180.000000) translate(-13.986342, -32.100961) "></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M7.87246342,15.187333 C7.87246342,19.662333 7.62248342,23.636333 9.91748342,22.938333 C12.2124834,22.240333 13.1614834,18.171333 15.3315234,21.697333 C17.5015234,25.223333 20.7564234,23.597333 20.7564234,17.764333 C20.7564234,15.8093488 20.7868653,13.8089825 20.8171405,11.8243387 C20.8579288,9.15051706 13.3337365,8.03085967 9.48880282,9.99373299 C7.67257773,10.9209323 7.87246342,13.7516539 7.87246342,15.187333 Z" transform="translate(14.340885, 15.273492) rotate(-180.000000) translate(-14.340885, -15.273492) "></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[29]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M6.91569988,17.7408387 C8.09169988,19.8198387 9.26671988,21.4928387 8.99571988,24.2278387 C8.72471988,26.9628387 7.36768988,33.3828387 8.36268988,36.5468387 C8.56133988,37.3930387 8.95001988,38.1828387 9.49925988,38.8565387 C10.0484899,39.5301387 10.7438799,40.0699387 11.5326999,40.4348387 C11.5326999,40.4348387 10.4526999,35.3398387 11.5326999,33.5938387 C12.3760999,32.4242387 12.8469999,31.0273387 12.8836999,29.5858387 C12.9736999,28.1388387 12.9736999,26.5118387 12.9736999,26.5118387 C12.9736999,26.5118387 15.5966999,27.2348387 15.5056999,31.3948387 C15.4146999,35.5548387 14.6916999,42.5158387 14.6916999,42.5158387 C14.6916999,42.5158387 18.8506999,38.8988387 19.4836999,34.7398387 C20.1166999,30.5808387 19.8446999,20.4538387 20.5686999,19.2788387 C21.0499743,18.384045 17.3424302,20.5672792 13.7526985,20.2174393 C10.0999309,19.8614562 6.56257292,16.9866814 6.91569988,17.7408387 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M16.8606999,8.78886868 C15.2290999,9.20469868 13.5192999,9.20469868 11.8876999,8.78886868 C8.63271988,8.15586868 6.82469988,10.0548687 6.37269988,12.9478387 C6.02479988,14.5619387 6.21553988,16.2455387 6.91569988,17.7408387 C7.49019228,18.7564592 10.2185909,20.299087 13.3225309,20.5825851 C16.5724321,20.8794146 20.198384,19.8798348 20.5686999,19.2788387 C21.5396999,17.4735387 22.0374999,15.4516387 22.0156999,13.4018387 C22.0156999,10.9608387 22.1966999,7.70186868 20.3886999,8.02186868 C18.5806999,8.34186868 16.8606999,8.78886868 16.8606999,8.78886868 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[30]}</div>
                                </div>

                                <div className='teeth_cont_numb'>
                                        <div className='svg_count'>
                                        <svg width="28px" height="51px" viewBox="0 0 28 51" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M8.12467504,20.7215379 C8.03551504,23.9674379 8.31598504,27.2130379 8.96066504,30.3955379 C10.045665,36.0955379 12.305715,38.7135379 12.305715,38.7135379 C12.305715,38.7135379 12.666715,30.4855379 12.848715,28.3135379 C13.030715,26.1415379 14.837715,26.4135379 15.018715,28.9465379 C15.106715,32.2078379 14.955615,35.4712379 14.566615,38.7105379 C14.295615,40.7005379 14.205615,41.4235379 14.205615,41.4235379 C15.578015,40.4001379 16.732615,39.1135379 17.601915,37.6387379 C18.471215,36.1640379 19.037915,34.5307379 19.268715,32.8345379 C19.991715,27.1345379 19.177615,22.0745379 19.720615,19.9045379 C19.979263,18.8708989 18.258053,20.8731243 15.3844693,21.0776379 C12.2253117,21.3024758 7.8825097,19.82486 8.12467504,20.7215379 Z"></path><path stroke="#000000" fill="#BABDC4" fill-rule="nonzero" d="M8.95966504,9.87149785 C8.95966504,9.87149785 6.97066504,11.3185179 7.33266504,15.4775379 C7.39008605,17.0714768 7.60989807,17.9940637 7.98992637,19.4090948 C8.03247521,19.567525 7.98952582,21.1417634 9.98410665,21.151744 C11.5519238,21.1595891 15.0753576,21.9428341 16.499515,21.6711444 C18.8655146,21.2197774 19.4912784,20.8210397 19.720615,19.9045379 C20.263615,17.7345379 20.353715,12.4905379 18.906715,10.5925079 C18.292715,9.84224785 17.445315,9.31898785 16.499515,9.10605785 C15.553715,8.89311785 14.563915,9.00276785 13.687615,9.41751785 C12.396615,10.0505179 12.126615,10.4115079 11.131655,9.95950785 C10.435895,9.69766785 9.67432504,9.66680785 8.95966504,9.87149785 Z"></path></g></svg>
                                        </div>

                                        <div className='numb_buble' onClick={(e)=>{activate(e)}}>{numbering[31]}</div>
                                </div>



                                </div>

                                        </div>
                                </div>
                                 
                                 <div style={{height:"100%"}}>
                                        <Table table_under={tooth_arr}  patient_name={patient_name} />
                                 </div>
                        </div>
                </div>

        </div>
       
    </div>
  )
}

export default denstist